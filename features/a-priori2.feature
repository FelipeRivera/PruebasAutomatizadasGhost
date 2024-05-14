Feature: Validacion funcionalidades Ghost 5.80

@user6 @web
Scenario: ES6 Como usuario, quiero crear un post  en la aplicación y ademas verlo reflejado en el view site
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on posts
  And I click on new post
  And I enter post title "<NEW_POST_SITE>" in the content field
  And I enter post content "<NEW_POST_SITE_CONTENT>" in the content field
  And I click publish
  And I click continue, final review
  And I click publish post, right now
  And I click Back to editor
  And I click on posts
  And I click on view site
  And I click on posts
  Then I verify that a post with text "<NEW_POST_SITE>" exists

@user7 @web
Scenario: ES7 Como usuario, quiero crear una page en la aplicación y ademas verificar el cambio en el listado
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on pages
  And I click on new page
  And I enter page title "<NEW_PAGE>" in the content field
  And I enter page content "<NEW_PAGE_CONTENT>" in the content field
  And I click publish
  And I click continue, final review
  And I click publish page, right now
  And I click Back to editor
  And I click on pages
  Then I verify that a page with name "<NEW_PAGE>" exists

@user8 @web
Scenario: ES8 Como usuario, quiero crear una page en la aplicacion, verificar el cambio en el listado y ademas poder eliminarla si se desea
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on pages
  And I click on new page
  And I enter page title "<NEW_PAGE_DEL>" in the content field
  And I enter page content "<NEW_PAGE_CONTENT_DEL>" in the content field
  And I click publish
  And I click continue, final review
  And I click publish page, right now
  And I click Back to editor
  And I click on pages
  Then I verify that a page with name "<NEW_PAGE_DEL>" exists
  When I click on a page with name "<NEW_PAGE_DEL>"
  And I click on the page options element
  And I scroll to the delete post button and click it
  Then I verify that a confirmation modal exists
  When I click on Delete
  Then I verify that a page with text "<NEW_PAGE_DEL>" does not exist

@user9 @web
Scenario: ES9 Como usuario, quiero crear un draft  en la aplicación y verificar que existe una actualización en el listado
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on posts
  And I click on show list
  And I click on drafts
  And I click on new post
  And I enter draft title "<NEW_DRAFT>" in the content field
  And I enter draft content "<NEW_DRAFT_CONTENT>" in the content field
  And I click publish
  And I click continue, final review
  And I click publish post, right now
  And I click Back to editor
  And I click on back to posts
  And I click on posts
  Then I verify that a draft with name "<NEW_DRAFT>" exists

@user10 @web
Scenario: ES10 Como usuario, quiero crear un post  en la aplicación y buscarlo en la barra de búsqueda 
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on posts
  And I click on new post
  And I enter post title "<NEW_POST_SEARCH>" in the content field
  And I enter post content "<NEW_POST_SEARCH_CONTENT>" in the content field
  And I click publish
  And I click continue, final review
  And I click publish post, right now
  And I click Back to editor
  And I click on posts
  And I click on view site
  And I click on posts
  And I click on search
  And I write "<NEW_POST_SEARCH>" and press Enter in the search input