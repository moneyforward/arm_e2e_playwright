import { test, expect } from '@playwright/test';
import { Default_claim_deposit_accounts_Tax } from '@pages/Settings/Default_claim_deposit_accounts_Tax.page'

test('SetDefaultAccount', async ({ page }) => {
  const testName = test.info().title;
  console.log(`${testName} - started`);
  const DefaultAccountPage = new Default_claim_deposit_accounts_Tax(page);
  await DefaultAccountPage.NavigateToOfficeDefaultAccountScreen();
  await DefaultAccountPage.DefaultAccount.nth(0).click();
  await page.locator('.el-dropdown-menu__item >> text=ICICI001').nth(0).click();
  await DefaultAccountPage.DefaultAccount.nth(2).click();
  await page.locator('.el-dropdown-menu__item >> text=ICICI001').nth(1).click();
  await DefaultAccountPage.DefaultAccount.nth(4).click();
  await page.locator('.el-dropdown-menu__item >> text=ICICI001').nth(2).click();
  await DefaultAccountPage.SaveBtn.click();

  await DefaultAccountPage.DefaultAccount.nth(0).click();
  await page.locator('.el-dropdown-menu__item >> text=HDFC001').nth(0).click();
  await DefaultAccountPage.DefaultAccount.nth(1).click();
  await page.locator('.el-dropdown-menu__item >> text=HDFC001CHILD').nth(0).click();
  await DefaultAccountPage.DefaultAccount.nth(2).click();
  await page.locator('.el-dropdown-menu__item >> text=AXIS001').nth(1).click();
  await DefaultAccountPage.DefaultAccount.nth(4).click();
  await page.locator('.el-dropdown-menu__item >> text=AXIS001').nth(2).click();
  await DefaultAccountPage.SaveBtn.click();
});