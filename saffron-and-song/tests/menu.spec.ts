import { test, expect } from '@playwright/test';

test('menu page loads and filters work', async ({ page }) => {
  await page.goto('/en/menu');

  // Check page loads
  await expect(page.getByRole('heading', { name: 'Our Menu' })).toBeVisible();

  // Click stews category filter
  await page.getByRole('button', { name: 'Persian Stews' }).click();

  // Check that Ghormeh Sabzi appears in filtered results
  await expect(page.getByText('Ghormeh Sabzi')).toBeVisible();

  // Check search functionality
  await page.getByPlaceholder('Search dishes...').fill('rice');
  await expect(page.getByText('Zereshk Polo')).toBeVisible();
});

test('navigation works across locales', async ({ page }) => {
  await page.goto('/en');
  
  // Check English content
  await expect(page.getByRole('heading', { name: 'Saffron & Song' })).toBeVisible();
  
  // Switch to Farsi
  await page.getByRole('link', { name: 'FA' }).click();
  
  // Check Farsi content loads
  await expect(page.getByRole('heading', { name: 'زعفران و آواز' })).toBeVisible();
});

test('reservation form validation', async ({ page }) => {
  await page.goto('/en/reservations');

  // Submit empty form to test validation
  await page.getByRole('button', { name: 'Reserve Table' }).click();
  
  // Check that form doesn't submit without required fields
  await expect(page.getByText('Name is required')).toBeVisible({ timeout: 3000 });
});

test('gallery lightbox functionality', async ({ page }) => {
  await page.goto('/en/gallery');

  // Click on first image to open lightbox
  await page.locator('button').first().click();

  // Check lightbox opens
  await expect(page.getByRole('dialog', { name: 'Image lightbox' })).toBeVisible();

  // Close with escape key
  await page.keyboard.press('Escape');
  
  // Check lightbox closes
  await expect(page.getByRole('dialog', { name: 'Image lightbox' })).not.toBeVisible();
});