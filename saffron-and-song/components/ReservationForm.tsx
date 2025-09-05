"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { getDictionary, type Locale } from "@/lib/i18n";
import { z } from "zod";

const reservationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  partySize: z.number().min(1).max(20),
  notes: z.string().optional(),
});

type ReservationData = z.infer<typeof reservationSchema>;

interface ReservationFormProps {
  locale: Locale;
}

export function ReservationForm({ locale }: ReservationFormProps) {
  const dict = getDictionary(locale);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<ReservationData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    partySize: 2,
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validated = reservationSchema.parse(formData);
      
      // Submit to server action
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!response.ok) throw new Error('Failed to submit reservation');

      toast.success(dict.reservations.form.success, {
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        partySize: 2,
        notes: "",
      });
    } catch (error) {
      console.error('Reservation error:', error);
      toast.error(dict.reservations.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'partySize' ? parseInt(value) : value,
    }));
  };

  // Generate time slots
  const timeSlots = [];
  for (let hour = 12; hour <= 22; hour++) {
    for (let min = 0; min < 60; min += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
      if (hour < 22 || (hour === 22 && min === 0)) {
        timeSlots.push(time);
      }
    }
  }

  // Get tomorrow's date as minimum
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[color:var(--navy)] mb-2">
          {dict.reservations.form.name} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--saffron)]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[color:var(--navy)] mb-2">
          {dict.reservations.form.email} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--saffron)]"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[color:var(--navy)] mb-2">
          {dict.reservations.form.phone} *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--saffron)]"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-[color:var(--navy)] mb-2">
            {dict.reservations.form.date} *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={minDate}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--saffron)]"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-[color:var(--navy)] mb-2">
            {dict.reservations.form.time} *
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--saffron)]"
          >
            <option value="">Select time</option>
            {timeSlots.map(slot => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="partySize" className="block text-sm font-medium text-[color:var(--navy)] mb-2">
          {dict.reservations.form.partySize} *
        </label>
        <select
          id="partySize"
          name="partySize"
          value={formData.partySize}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--saffron)]"
        >
          {[...Array(20)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} {i === 0 ? 'person' : 'people'}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-[color:var(--navy)] mb-2">
          {dict.reservations.form.notes}
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--saffron)]"
          placeholder="Dietary requirements, special occasions, etc."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? dict.reservations.form.submitting : dict.reservations.form.submit}
      </Button>
    </form>
  );
}