import { test, expect } from '@playwright/test';
import { Default_claim_deposit_accounts_Tax } from '@pages/Settings/Default_claim_deposit_accounts_Tax.page'

test.describe('Tax Settings', async () => {

test('SetTaxRoundingDown', async ({ page }) => {
  const testName = test.info().title;
  console.log(`${testName} - started`);
  const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
  await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
  await TaxSettingPage.SetTaxRoundingDown();
});
test('SetTaxRoundingUp', async ({ page }) => {
  const testName = test.info().title;
  console.log(`${testName} - started`);
  const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
  await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
  await TaxSettingPage.SetTaxRoundingUp();
});
test('SetTaxRoundingOff', async ({ page }) => {
  const testName = test.info().title;
  console.log(`${testName} - started`);
  const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
  await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
  await TaxSettingPage.SetTaxRoundingOff();
});
});