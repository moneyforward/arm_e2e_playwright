import { test, expect } from '@playwright/test';
import { QuotationPage } from '@pages/TransactionsMenu/Quotation/QuotationPages.page';

test('C116103_Validation for Remarks', async ({ page }) => {
//Quotation Creation
const quotationPage = new QuotationPage(page)
await quotationPage.NavigateToQuotation();
await quotationPage.NewQuotation();
await quotationPage.Client.click();
await page.getByText('A2D PC DOC').click();
await quotationPage.QuotationDate.click();
await page.getByText('1', { exact: true }).first().click();
await quotationPage.ExpirationDate.click();
await page.getByText('29').nth(3).click();
await quotationPage.Item.click();
await page.getByText('IPHONE11').click();
await quotationPage.ItemDetail.click();
await quotationPage.ItemDetail.clear();
await quotationPage.ItemDetail.fill('QATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestData'); //with max negative value
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.ItemDetailValidation).toHaveText('2000文字以内で入力してください');
await quotationPage.ItemDetail.click();
await quotationPage.ItemDetail.clear();
await quotationPage.ItemDetail.fill('QATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDat'); //with max negative value
await quotationPage.Note.click();
await quotationPage.Note.fill('QATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestData');
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.NoteValidation).toHaveText('2000文字以内で入力してください');
await quotationPage.Note.click();
await quotationPage.Note.clear();
await quotationPage.Note.fill('QATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQATestDatQATestDataQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQQATestDataQATestDataQATestDataQATestDat');
await quotationPage.QuotationCreateBtn.click();
await expect(quotationPage.ClientD).toHaveText('A2D PC DOC 御中');

});