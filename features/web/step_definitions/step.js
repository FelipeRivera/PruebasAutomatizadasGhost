const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {string}', async function (email) {
    const element = await this.driver.$('input[name="identification"]');
    await element.waitForDisplayed();
    await element.setValue(email);
});

When('I enter password {string}', async function (password) {
    const element = await this.driver.$('input[name="password"]');
    await element.waitForDisplayed();
    await element.setValue(password);
});

When('I click login', async function () {
    const element = await this.driver.$('#ember10');
    await element.waitForDisplayed();
    await element.click();
});

When('I click on posts', async function () {
    const element = await this.driver.$('a[href="#/posts/"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
});

When('I click on new post', async function () {
    const element = await this.driver.$('a[href*="#/editor/post/"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
});

When('I enter post title {string} in the content field', async function (content) {
    const element = await this.driver.$('input[placeholder="Post title"], textarea[placeholder="Post title"]');
    await element.waitForDisplayed();
    await element.setValue(content);
});

When('I enter post content {string} in the content field', async function (content) {
    const element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
    await element.waitForDisplayed();
    await element.setValue(content);
});

When('I click publish', async function () {
    const element = await this.driver.$('span=Publish');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
});

Then('I verify that a button with span continue final review exists', async function () {
    const elements = await this.driver.$$('span=Continue, final review →');
    const exists = elements.length > 0;
    if (!exists) {
        throw new Error('No se encontró un botón con un span con el texto "Continue, final review".');
    }
});

When('I click continue, final review', async function () {
    const element = await this.driver.$('span=Continue, final review →');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
});

Then('I verify that a button with span Publish post, right now exists', async function () {
    const elements = await this.driver.$$('span=Publish post, right now');
    const exists = elements.length > 0;
    if (!exists) {
        throw new Error('No se encontró un botón con un span con el texto "Publish post, right now".');
    }
});

When('I click publish post, right now', async function () {
    const element = await this.driver.$('span=Publish post, right now');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
});

When('I click Back to editor', async function () {
    const element = await this.driver.$('span=Back to editor');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
});

When('I click on tags', async function () {
    const element = await this.driver.$('a[href="#/tags/"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
});

When('I click on new tag', async function () {
    const element = await this.driver.$('a[href*="#/tags/new/"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
});

When('I enter tag name {string}', async function (content) {
    const element = await this.driver.$('#tag-name');
    await element.waitForDisplayed();
    await element.setValue(content);
});

When('I enter tag description {string}', async function (content) {
    const element = await this.driver.$('#tag-description');
    await element.waitForDisplayed();
    await element.setValue(content);
});

When('I click on save', async function () {
    const element = await this.driver.$('span=Save');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
});

Then('I verify that an element tag with text {string} exists', async function (content) {
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
    if (!found) {
        throw new Error(`No se encontró un <h3> con la clase 'gh-tag-list-name' y el texto '${content}'.`);
    }
});

Then('I verify that a post with text {string} exists', async function (content) {
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
    if (!found) {
        throw new Error(`No se encontró un <h3> con la clase 'gh-content-entry-title' y el texto '${content}'.`);
    }
});

When('I click on a post with name {string}', async function (content) {
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
    if (!found) {
        throw new Error(`No se encontró un <h3> con la clase 'gh-content-entry-title' y el texto '${content}'.`);
    }
});

When('I click on the post options element', async function () {
    const element = await this.driver.$('svg[fill="none"][viewBox="0 0 24 24"] path[d="M21 2.5H3c-.828 0-1.5.608-1.5 1.357v16.286c0 .75.672 1.357 1.5 1.357h18c.828 0 1.5-.608 1.5-1.357V3.857c0-.75-.672-1.357-1.5-1.357zm-4.5 0v19"]');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
});

When('I click on the tags dropdown', async function () {
    const element = await this.driver.$('#tag-input');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
});

When('I select the tag option with text {string}', async function (content) {
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
    throw new Error(`No se encontró una opción con el texto '${content}'.`);
});

When('I click on Update', async function () {
    const element = await this.driver.$('span=Update');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
});

Then('I verify that an update notification exist', async function () {
    const element = await this.driver.$('article.gh-notification.gh-notification-passive');
    await element.waitForDisplayed();
    const exists = await element.isExisting();
    if (!exists) {
        throw new Error('No se encontró un <article> con la clase "gh-notification gh-notification-passive".');
    }
});

When('I click on tag with name {string}', async function (content) {
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
    if (!found) {
        throw new Error(`No se encontró un <h3> con la clase 'gh-tag-list-name' y el texto '${content}'.`);
    }
});

When('I click on Delete tag', async function () {
    const element = await this.driver.$('span=Delete tag');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
});

Then('I verify that an header with text {string} exists', async function (content) {
    const element = await this.driver.$(`//h1[text()='${content}']`);
    await element.waitForDisplayed();
    const exists = await element.isExisting();
    if (!exists) {
        throw new Error(`No se encontró un <h1> con el texto '${content}'.`);
    }
});

When('I click on Delete', async function () {
    const element = await this.driver.$('span=Delete');
    await element.waitForDisplayed();
    await element.waitForClickable();
    await element.click();
});

Then('I verify that an element tag with text {string} does not exist', async function (content) {
    const elements = await this.driver.$$('h3.gh-tag-list-name');
    for (const element of elements) {
        await element.waitForDisplayed();
        const text = await element.getText();
        if (text.trim() === content) {
            throw new Error(`Se encontró un <h3> con la clase 'gh-tag-list-name' y el texto '${content}', pero no debería existir.`);
        }
    }
});

When('I scroll to the delete post button and click it', async function () {
    const button = await this.driver.$('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button');
    await button.scrollIntoView();
    await button.waitForDisplayed();
    await button.waitForClickable();
    await button.click();
});

Then('I verify that a post with text {string} does not exist', async function (content) {
    const elements = await this.driver.$$('h3.gh-content-entry-title');
    for (const element of elements) {
        await element.waitForDisplayed();
        const text = await element.getText();
        if (text.trim() === content) {
            throw new Error(`Se encontró un <h3> con la clase 'gh-content-entry-title' y el texto '${content}', pero no debería existir.`);
        }
    }
});

Then('I verify that a confirmation modal exists', async function () {
    const modal = await this.driver.$('div.modal-content');
    await modal.waitForDisplayed();
    const exists = await modal.isExisting();
    if (!exists) {
        throw new Error('No se encontró un <div> con la clase "modal-content".');
    }
});