import { expect, Locator, Page } from "@playwright/test"
const baseURL = process.env.BASEURL as string;

export class Default_claim_deposit_accounts_Tax {
    readonly page: Page
    //Claim Page Elements

    //Tax Page Elements
    readonly TaxRoundingDownRadioButton: Locator
    readonly TaxRoundingUpRadioButton: Locator
    readonly TaxRoundingOffRadioButton: Locator
    readonly TaxIncludeRadioButton: Locator
    readonly TaxExcludeRadioButton: Locator
    readonly SaveBtn: Locator

    constructor(page: Page) {
        this.page = page
        //Claim Page Elements

        //Tax Page Elements
        this.TaxRoundingDownRadioButton = this.page.getByRole('radio',{name: '切り捨て'})
        this.TaxRoundingUpRadioButton = this.page.getByRole('radio',{name: '切り上げ'})
        this.TaxRoundingOffRadioButton = this.page.getByRole('radio',{name: '四捨五入'})
        this.TaxIncludeRadioButton = this.page.getByRole('radio', { name: '税込' });
        this.TaxExcludeRadioButton = this.page.getByRole('radio', { name: '税抜' });
        this.SaveBtn = this.page.locator('button.el-button.btn-save');   
    }
    async NavigateToOfficeDefaultAccountScreen() {
        await this.page.goto(baseURL);
        await this.page.getByRole('menuitem', { name: '設定' }).click();
        await this.page.locator('li').filter({ hasText: '債権・入金の科目のデフォルト, 消費税' }).locator('div').click();
    }    
    async NavigateToOfficeTaxSettingScreen() {
        await this.page.goto(baseURL);
        await this.page.getByRole('menuitem', { name: '設定' }).click();
        await this.page.locator('li').filter({ hasText: '債権・入金の科目のデフォルト, 消費税' }).locator('div').click();
        await this.page.getByRole('link', { name: '消費税' }).click();
        await this.page.waitForURL(baseURL+'/settings/tax_rounding_method/edit',{ timeout: 30000 });
    }
    async SetTaxRoundingDown(){
        await this.TaxRoundingDownRadioButton.click();
        await this.SaveBtn.click();
        await expect(this.TaxRoundingDownRadioButton).toBeChecked();
    }
    async SetTaxRoundingUp(){
        await this.TaxRoundingUpRadioButton.click();
        await this.SaveBtn.click();
        await expect(this.TaxRoundingUpRadioButton).toBeChecked();
    }
    async SetTaxRoundingOff(){
        await this.TaxRoundingOffRadioButton.click();
        await this.SaveBtn.click();
        await expect(this.TaxRoundingOffRadioButton).toBeChecked();
    }
    async SetTaxInclude(){
        await this.TaxIncludeRadioButton.click();
        await this.SaveBtn.click();
        await expect(this.TaxIncludeRadioButton).toBeChecked();
    }
    async SetTaxExclude(){
        await this.TaxExcludeRadioButton.click();
        await this.SaveBtn.click();
        await expect(this.TaxExcludeRadioButton).toBeChecked();
    }    
}