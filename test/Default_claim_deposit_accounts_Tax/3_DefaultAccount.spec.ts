import { test, expect } from '@playwright/test';
import { Default_claim_deposit_accounts_Tax } from '@pages/Settings/Default_claim_deposit_accounts_Tax.page'

test('SetDefaultAccount', async ({ page }) => {
  const testName = test.info().title;
  console.log(`${testName} - started`);
  const TaxSettingPage = new Default_claim_deposit_accounts_Tax(page);
  await TaxSettingPage.NavigateToOfficeDefaultAccountScreen();
  // await page.locator('div:nth-child(1) > .el-card__body > div:nth-child(1) > .el-form-item__content').click();
  await page.locator('div.el-input__inner').nth(0).click();
  await page.getByText('li.el-dropdown-menu__item.option:has-text("ICICI001")').click();
  await page.locator('div.el-input__inner').nth(2).click();
  await page.getByText('ICICI001').nth(1).click();
  await page.locator('div.el-input__inner').nth(4).click();
  await page.getByText('ICICI001').nth(1).click();
});

//*[@id="__layout"]/div/main/div/section/div/div/form/div[2]/div/div[1]/div/div/div/div
//*[@id="__layout"]/div/main/div/section/div/div/form/div[4]/div/div[1]/div/div/div/div


//*[@id="__layout"]/div/main/div/section/div/div/form/div[2]/div/div[1]/div/div