import { test, expect } from '@playwright/test';
import { Default_claim_deposit_accounts_Tax } from '@pages/Settings/Default_claim_deposit_accounts_Tax.page'

test.describe('Tax Calculation Methods', async () => {

test('SetTaxExclude', async ({ page }) => {
  const testName = test.info().title;
  console.log(`${testName} - started`);
  const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
  await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
  await TaxSettingPage.SetTaxExclude();
});

test('SetTaxInclude', async ({ page }) => {
  const testName = test.info().title;
  console.log(`${testName} - started`);
  const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
  await TaxSettingPage.NavigateToOfficeTaxSettingScreen();
  await TaxSettingPage.SetTaxInclude();
});
});