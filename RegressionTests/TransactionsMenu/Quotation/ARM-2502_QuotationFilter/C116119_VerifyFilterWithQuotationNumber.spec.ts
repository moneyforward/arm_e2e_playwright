import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test.skip('C116119_VerifyFilterWithQuotationNumber.spec', async ({ page }) => {
//Quotation Creation
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await quotationPage.QuotationNumFilter.click();
await quotationPage.QuotationNumFilter.fill('111');
await quotationPage.QuotationFilterBtn.click();
await expect(quotationPage.FirstRowQuotation).toHaveText('111');

});