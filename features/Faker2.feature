Feature: Validacion funcionalidades Ghost 5.80

@user6 @web
Scenario: ES6 Como usuario, quiero crear un post  en la aplicación y ademas verlo reflejado en el view site
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "$email_1"
  And I enter password "$string_1"
  And I click login
  Then I verify that retry button exists
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on posts
  And I click on new post
  And I enter post title "$string_2" in the content field
  And I enter post content "$string_3" in the content field
  And I click publish
  And I click continue, final review
  And I click publish post, right now
  And I click Back to editor
  And I click on posts
  And I click on view site
  And I click on posts
  Then I verify that a post with text "$$string_2" exists

@user7 @web
Scenario: ES7 Como usuario, quiero crear una page en la aplicación y ademas verificar el cambio en el listado
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on pages
  And I click on new page
  And I enter page title "$string_3" in the content field
  And I enter page content "$string_4" in the content field
  And I click publish
  And I click continue, final review
  And I click publish page, right now
  And I click Back to editor
  And I click on pages
  Then I verify that a page with name "$$string_3" exists

@user8 @web
Scenario: ES8 Como usuario, quiero crear una page en la aplicacion, verificar el cambio en el listado y ademas poder eliminarla si se desea
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on pages
  And I click on new page
  And I enter page title "$string_5" in the content field
  And I enter page content "$string_6" in the content field
  And I click publish
  And I click continue, final review
  And I click publish page, right now
  And I click Back to editor
  And I click on pages
  Then I verify that a page with name "$$string_5" exists
  When I click on a page with name "$$string_5"
  And I click on the page options element
  And I scroll to the delete post button and click it
  Then I verify that a confirmation modal exists
  When I click on Delete
  Then I verify that a page with text "$$string_5" does not exist

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
  And I enter draft title "$string_6" in the content field
  And I enter draft content "$string_7" in the content field
  And I click publish
  And I click continue, final review
  And I click publish post, right now
  And I click Back to editor
  And I click on back to posts
  And I click on posts
  Then I verify that a draft with name "$$string_6" exists

@user10 @web
Scenario: ES10 Como usuario, quiero crear un post  en la aplicación y buscarlo en la barra de búsqueda 
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "$email_1"
  And I enter password "$string_1"
  And I click login
  Then I verify that retry button exists
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on posts
  And I click on new post
  And I enter post title "$string_8" in the content field
  And I enter post content "$string_9" in the content field
  And I click publish
  And I click continue, final review
  And I click publish post, right now
  And I click Back to editor
  And I click on posts
  And I click on view site
  And I click on posts
  And I click on search
  And I write "$$string_8" and press Enter in the search input