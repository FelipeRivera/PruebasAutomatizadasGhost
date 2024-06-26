const { Given, When, Then } = require('@cucumber/cucumber');

const ghostVersion = '5.80'

When('I enter email {kraken-string}', async function (email) {
    const element = await this.driver.$('input[name="identification"]');
    await element.waitForDisplayed();
    await element.setValue(email);
    await takeScreenshot(this.driver, 'enter_email');
});

When('I enter password {kraken-string}', async function (password) {
    const element = await this.driver.$('input[name="password"]');
    await element.waitForDisplayed();
    await element.setValue(password);
    await takeScreenshot(this.driver, 'enter_password');
});

When('I click login', async function () {
    const element = await this.driver.$('#ember10');
    await element.waitForDisplayed();
    await element.click();
    await takeScreenshot(this.driver, 'click_login');
});

When('I click on posts', async function () {
    const element = await this.driver.$('a[href="#/posts/"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_posts');
});

When('I click on new post', async function () {
    const element = await this.driver.$('a[href*="#/editor/post/"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_new_post');
});

When('I enter post title {kraken-string} in the content field', async function (content) {
    const element = await this.driver.$('input[placeholder="Post title"], textarea[placeholder="Post title"]');
    await element.waitForDisplayed();
    await element.setValue(content);
    await takeScreenshot(this.driver, 'enter_post_title');
});

When('I enter post content {kraken-string} in the content field', async function (content) {
    const element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
    await element.waitForDisplayed();
    await element.setValue(content);
    await takeScreenshot(this.driver, 'enter_post_content');
});

When('I click publish', async function () {
    const element = await this.driver.$('span=Publish');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_publish');
});

Then('I verify that a button with span continue final review exists', async function () {
    const elements = await this.driver.$$('span=Continue, final review →');
    const exists = elements.length > 0;
    await takeScreenshot(this.driver, 'verify_continue_final_review');
    if (!exists) {
        throw new Error('No se encontró un botón con un span con el texto "Continue, final review".');
    }
});

When('I click continue, final review', async function () {
    const element = await this.driver.$('span=Continue, final review →');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_continue_final_review');
});

Then('I verify that a button with span Publish post, right now exists', async function () {
    const elements = await this.driver.$$('span=Publish post, right now');
    const exists = elements.length > 0;
    await takeScreenshot(this.driver, 'verify_Publish_post_exists');
    if (!exists) {
        throw new Error('No se encontró un botón con un span con el texto "Publish post, right now".');
    }
});

When('I click publish post, right now', async function () {
    const element = await this.driver.$('span=Publish post, right now');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_publish_post');
});

When('I click Back to editor', async function () {
    const element = await this.driver.$('span=Back to editor');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_back_editor');
});

When('I click on tags', async function () {
    const element = await this.driver.$('a[href="#/tags/"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_on_tags');
});

When('I click on new tag', async function () {
    const element = await this.driver.$('a[href*="#/tags/new/"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_new_tag');
});

When('I enter tag name {kraken-string}', async function (content) {
    const element = await this.driver.$('#tag-name');
    await element.waitForDisplayed();
    await element.setValue(content);
    await takeScreenshot(this.driver, 'enter_tag_name');
});

When('I enter tag description {kraken-string}', async function (content) {
    const element = await this.driver.$('#tag-description');
    await element.waitForDisplayed();
    await element.setValue(content);
    await takeScreenshot(this.driver, 'enter_tag_description');
});

When('I click on save', async function () {
    const element = await this.driver.$('span=Save');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_on_save');
});

Then('I verify that an element tag with text {kraken-string} exists', async function (content) {
    const elements = await this.driver.$$('h3.gh-tag-list-name');
    let found = false;
    for (const element of elements) {
        await element.waitForDisplayed();
        const text = await element.getText();
        if (text === content) {
            found = true;
            break;
        }
    }
    await takeScreenshot(this.driver, 'verify_element_tag');
    if (!found) {
        throw new Error(`No se encontró un <h3> con la clase 'gh-tag-list-name' y el texto '${content}'.`);
    }
});

Then('I verify that a post with text {kraken-string} exists', async function (content) {
    const elements = await this.driver.$$('h3.gh-content-entry-title');
    let found = false;
    for (const element of elements) {
        await element.waitForDisplayed();
        const text = await element.getText();
        if (text === content) {
            found = true;
            break;
        }
    }
    await takeScreenshot(this.driver, 'verify_post_exists');
    if (!found) {
        throw new Error(`No se encontró un <h3> con la clase 'gh-content-entry-title' y el texto '${content}'.`);
    }
});

When('I click on a post with name {kraken-string}', async function (content) {
    const elements = await this.driver.$$('h3.gh-content-entry-title');
    let found = false;
    for (const element of elements) {
        await element.waitForDisplayed();
        const text = await element.getText();
        if (text === content) {
            found = true;
            element.click();
            break;
        }
    }
    await takeScreenshot(this.driver, 'click_post_name');
    if (!found) {
        throw new Error(`No se encontró un <h3> con la clase 'gh-content-entry-title' y el texto '${content}'.`);
    }
});

When('I click on the post options element', async function () {
    const element = await this.driver.$('svg[fill="none"][viewBox="0 0 24 24"] path[d="M21 2.5H3c-.828 0-1.5.608-1.5 1.357v16.286c0 .75.672 1.357 1.5 1.357h18c.828 0 1.5-.608 1.5-1.357V3.857c0-.75-.672-1.357-1.5-1.357zm-4.5 0v19"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_post_options');
});

When('I click on the tags dropdown', async function () {
    const element = await this.driver.$('#tag-input');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_on_tags');
});

When('I select the tag option with text {kraken-string}', async function (content) {
    const options = await this.driver.$$('li.ember-power-select-option');
    for (const option of options) {
        await option.waitForDisplayed();
        const text = await option.getText();
        if (text.trim() === content) {
            await option.waitForClickable();
            await option.click();
            return;
        }
    }
    await takeScreenshot(this.driver, 'select_tag_option');
    throw new Error(`No se encontró una opción con el texto '${content}'.`);
});

When('I click on Update', async function () {
    const element = await this.driver.$('span=Update');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_on_update');
});

Then('I verify that an update notification exist', async function () {
    const element = await this.driver.$('article.gh-notification.gh-notification-passive');
    await element.waitForDisplayed();
    const exists = await element.isExisting();
    await takeScreenshot(this.driver, 'verify_update_notification');
    if (!exists) {
        throw new Error('No se encontró un <article> con la clase "gh-notification gh-notification-passive".');
    }
});

When('I click on tag with name {kraken-string}', async function (content) {
    const elements = await this.driver.$$('h3.gh-tag-list-name');
    let found = false;
    for (const element of elements) {
        await element.waitForDisplayed();
        const text = await element.getText();
        if (text === content) {
            element.click();
            found = true;
            break;
        }
    }
    await takeScreenshot(this.driver, 'click_tag_name');
    if (!found) {
        throw new Error(`No se encontró un <h3> con la clase 'gh-tag-list-name' y el texto '${content}'.`);
    }
});

When('I click on Delete tag', async function () {
    const element = await this.driver.$('span=Delete tag');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_delete_tag');
});

Then('I verify that an header with text {kraken-string} exists', async function (content) {
    const element = await this.driver.$(`//h1[text()='${content}']`);
    await element.waitForDisplayed();
    const exists = await element.isExisting();
    await takeScreenshot(this.driver, 'verify_header_exists');
    if (!exists) {
        throw new Error(`No se encontró un <h1> con el texto '${content}'.`);
    }
});

When('I click on Delete', async function () {
    const element = await this.driver.$('span=Delete');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_delete');
});

Then('I verify that an element tag with text {kraken-string} does not exist', async function (content) {
    const elements = await this.driver.$$('h3.gh-tag-list-name');
    for (const element of elements) {
        await element.waitForDisplayed();
        const text = await element.getText();
        if (text.trim() === content) {
            throw new Error(`Se encontró un <h3> con la clase 'gh-tag-list-name' y el texto '${content}', pero no debería existir.`);
        }
    }
    await takeScreenshot(this.driver, 'click_delete');
});

When('I scroll to the delete post button and click it', async function () {
    const button = await this.driver.$('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button');
    await button.scrollIntoView();
    await button.waitForDisplayed();
    await button.waitForClickable();
    await button.click();
    await takeScreenshot(this.driver, 'click_delete_post');
});

Then('I verify that a post with text {kraken-string} does not exist', async function (content) {
    const elements = await this.driver.$$('h3.gh-content-entry-title');
    for (const element of elements) {
        await element.waitForDisplayed();
        const text = await element.getText();
        if (text.trim() === content) {
            throw new Error(`Se encontró un <h3> con la clase 'gh-content-entry-title' y el texto '${content}', pero no debería existir.`);
        }
    }
    await takeScreenshot(this.driver, 'verify_post_exist');
});

Then('I verify that a confirmation modal exists', async function () {
    const modal = await this.driver.$('div.modal-content');
    await modal.waitForDisplayed();
    const exists = await modal.isExisting();
    await takeScreenshot(this.driver, 'verify_confirmation_modal');
    if (!exists) {
        throw new Error('No se encontró un <div> con la clase "modal-content".');
    }
});

When('I click on view site', async function () {
    const element = await this.driver.$('a[href="#/site/"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_view_site');
});

When('I click on pages', async function () {
    const element = await this.driver.$('a[href="#/pages/"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_on_pages');
});

When('I click on new page', async function () {
    const element = await this.driver.$('span=New page');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_on_new_page');
});

When('I enter page title {kraken-string} in the content field', async function (content) {
    const element = await this.driver.$('input[placeholder="Page title"], textarea[placeholder="Page title"]');
    await element.waitForDisplayed();
    await element.setValue(content);
    await takeScreenshot(this.driver, 'enter_page_title');
});

When('I enter page content {kraken-string} in the content field', async function (content) {
    const element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
    await element.waitForDisplayed();
    await element.setValue(content);
    await takeScreenshot(this.driver, 'enter_page_content');
});

When('I click publish page, right now', async function () {
    const element = await this.driver.$('span=Publish page, right now');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_publish_page');
});

Then('I verify that a page with name {kraken-string} exists', async function (content) {
    const elements = await this.driver.$$('h3.gh-content-entry-title');
    let found = false;
    for (const element of elements) {
        const text = await element.getText();
        if (text.trim() === content) {
            found = true;
            break;
        }
    }
    await takeScreenshot(this.driver, 'verify_page_name');
    if (!found) {
        throw new Error(`No se encontró un <h3> con la clase 'gh-content-entry-title' y el texto '${content}'.`);
    }
});

When('I click on the page options element', async function () {
    const element = await this.driver.$('svg[fill="none"][viewBox="0 0 24 24"] path[d="M21 2.5H3c-.828 0-1.5.608-1.5 1.357v16.286c0 .75.672 1.357 1.5 1.357h18c.828 0 1.5-.608 1.5-1.357V3.857c0-.75-.672-1.357-1.5-1.357zm-4.5 0v19"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_page_options');
});

When('I click on a page with name {kraken-string}', async function (content) {
    const elements = await this.driver.$$('h3.gh-content-entry-title');
    let found = false;
    for (const element of elements) {
        await element.waitForDisplayed();
        const text = await element.getText();
        if (text === content) {
            found = true;
            element.click();
            break;
        }
    }
    await takeScreenshot(this.driver, 'click_page_name');
    if (!found) {
        throw new Error(`No se encontró un <h3> con la clase 'gh-content-entry-title' y el texto '${content}'.`);
    }
});

When('I scroll to the delete page button and click it', async function () {
    const button = await this.driver.$('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button');
    await button.scrollIntoView();
    await button.waitForDisplayed();
    await button.waitForClickable();
    await button.click();
    await takeScreenshot(this.driver, 'scroll_page_button');
});

Then('I verify that a page with text {kraken-string} does not exist', async function (content) {
    const elements = await this.driver.$$('h3.gh-content-entry-title');
    for (const element of elements) {
        await element.waitForDisplayed();
        const text = await element.getText();
        if (text.trim() === content) {
            throw new Error(`Se encontró un <h3> con la clase 'gh-content-entry-title' y el texto '${content}', pero no debería existir.`);
        }
    }
    await takeScreenshot(this.driver, 'verify_page_text');
});

When('I click on drafts', async function () {
    const element = await this.driver.$('//span[@class="gh-nav-viewname" and text()="Drafts"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_on_drafts');
});

When('I enter draft title {kraken-string} in the content field', async function (content) {
    const element = await this.driver.$('input[placeholder="Post title"], textarea[placeholder="Post title"]');
    await element.waitForDisplayed();
    await element.setValue(content);
    await takeScreenshot(this.driver, 'enter_draft_title');
});

When('I enter draft content {kraken-string} in the content field', async function (content) {
    const element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
    await element.waitForDisplayed();
    await element.setValue(content);
    await takeScreenshot(this.driver, 'enter_draft_content');
});

When('I click on show list', async function () {
    const element = await this.driver.$('button.gh-nav-button-expand[aria-label="Expand custom post types"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_show_list');
});

When('I click on back to posts', async function () {
    const element = await this.driver.$('svg[viewBox="0 0 16 16"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_back_posts');
});

Then('I verify that a draft with name {kraken-string} exists', async function (content) {
    const elements = await this.driver.$$('h3.gh-content-entry-title');
    let found = false;
    for (const element of elements) {
        await element.waitForDisplayed();
        const text = await element.getText();
        if (text === content) {
            found = true;
            break;
        }
    }
    await takeScreenshot(this.driver, 'verify_draft_name');
    if (!found) {
        throw new Error(`No se encontró un <h3> con la clase 'gh-content-entry-title' y el texto '${content}'.`);
    }
});

When('I click on search', async function () {
    const element = await this.driver.$('svg[viewBox="0 0 24 24"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_search');
});

When('I write {kraken-string} and press Enter in the search input', async function (content) {
    const input = await this.driver.$('input.gh-input-with-select-input');
    await input.waitForDisplayed();
    await input.setValue(content);
    await input.keys('Enter');
    await takeScreenshot(this.driver, 'enter_search');
});

Then('I verify that retry button exists', async function () {
    const element = await this.driver.$('span > svg.retry_svg__retry-animated');
    let found = element !== null;
    if (!found) {
        throw new Error(`No se encontró el boton retry.`);
    }
});

const fs = require('fs');
const path = require('path');
async function takeScreenshot(driver, stepName) {
    const screenshot = await driver.takeScreenshot();
    const rootDir = process.cwd();
    const screenshotsDir = path.join(rootDir, 'screenshots_' + ghostVersion);
    if (!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir);
    }
    const filePath = path.join(screenshotsDir, `${stepName.replace(/\s/g, '_')}.png`);
    fs.writeFileSync(filePath, screenshot, 'base64');
    console.log(`Screenshot saved: ${filePath}`);
}

const https = require('https');
const filePath = path.join(process.cwd(), 'properties.json');

function fetchJsonFromUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {
                try {
                    const jsonData = JSON.parse(data);
                    resolve(jsonData);
                } catch (error) {
                    reject('Error parsing JSON data: ' + error.message);
                }
            });
        }).on('error', (error) => {
            reject('Error fetching data: ' + error.message);
        });
    });
}

async function updatePropertiesFile(url) {
    try {
        const newData = await fetchJsonFromUrl(url);
        let existingData;
        try {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            existingData = JSON.parse(fileContent);
        } catch (error) {
            throw new Error('Error reading properties.json file: ' + error.message);
        }
        for (const key in newData) {
            if (newData.hasOwnProperty(key)) {
                existingData[key] = newData[key];
            }
        }
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
        console.log('Data successfully updated in properties.json.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

Given('I fetch the testing data {kraken-string}', async function (url) {
    await updatePropertiesFile(url);
});

// Implementation for testing Ghost 3.42.4

When('I click login 3.42', async function () {
    const element = await this.driver.$('#ember12');
    await element.waitForDisplayed();
    await element.click();
    await takeScreenshot(this.driver, 'click_login');
});

When('I enter post title {kraken-string} in the content field 3.42', async function (content) {
    const element = await this.driver.$('input[placeholder="Post Title"], textarea[placeholder="Post Title"]');
    await element.waitForDisplayed();
    await element.setValue(content);
    await takeScreenshot(this.driver, 'enter_post_title');
});

When('I confirm publish 3.42', async function () {
    const element = await this.driver.$('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_publish_post');
});

When('I click on new post 3.42', async function () {
    const element = await this.driver.$('span=New post');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_new_post');
});

When('I click on the post options element 3.42', async function () {
    const element = await this.driver.$('svg[viewBox="0 0 24 24"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_post_options');
});

When('I click on close options element 3.42', async function () {
    const element = await this.driver.$('button[aria-label="Close"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_post_options');
});

When('I click on Update 3.42', async function () {
    const element = await this.driver.$('//div[contains(@class, "gh-publishmenu-trigger")]//span[text()="Update"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
    await takeScreenshot(this.driver, 'click_on_update');
});