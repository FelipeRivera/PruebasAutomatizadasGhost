Feature: Validacion funcionalidades Ghost 5.80

@user1 @web
Scenario: ES1 Como usuario, quiero crear una nueva publicación de blog en la aplicación y verificar que se refleja en el listado exitosamente
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
  When I click publish
  Then I verify that a button with span continue final review exists
  When I click continue, final review
  Then I verify that a button with span Publish post, right now exists
  When I click publish post, right now
  And I click Back to editor
  And I click on posts
  And I click on posts
  Then I verify that a post with text "$$string_2" exists

  @user2 @web
Scenario: ES2 Como usuario, quiero crear una nueva etiqueta en la aplicación y verificar que se refleja el cambio en el listado exitosamente
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on tags
  And I click on new tag
  And I enter tag name "$string_4"
  And I enter tag description "$string_5"
  And I click on save
  And I click on tags
  Then I verify that an element tag with text "$$string_4" exists

@user3 @web
Scenario: ES3 Como usuario, quiero crear una nueva etiqueta y un nuevo post en la aplicación y ademas agregar mi etiqueta al post
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on tags
  And I click on new tag
  And I enter tag name "$string_1"
  And I enter tag description "$string_7"
  And I click on save
  And I click on tags
  Then I verify that an element tag with text "$$string_1" exists
  When I click on posts
  And I click on new post
  And I enter post title "$string_8" in the content field
  And I enter post content "$string_9" in the content field
  And I click publish
  And I click continue, final review
  And I click publish post, right now
  And I click Back to editor
  And I click on posts
  Then I verify that a post with text "$$string_8" exists
  When I click on a post with name "$$string_8"
  And I click on the post options element
  And I click on the tags dropdown
  And I select the tag option with text "$$string_1"
  And I click on Update
  Then I verify that an update notification exist

@user4 @web
Scenario: ES4 Como usuario, quiero crear una nueva etiqueta en la aplicación,  verificar que se refleja el cambio en el listado y si no me gusta, poder eliminar la etiqueta
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on tags
  And I click on new tag
  And I enter tag name "$string_8"
  And I enter tag description "$string_9"
  And I click on save
  And I click on tags
  Then I verify that an element tag with text "$$string_8" exists
  When I click on tag with name "$$string_8"
  And I click on Delete tag
  Then I verify that an header with text "<DELETE_TAG_VALIDATION>" exists
  When I click on Delete
  Then I verify that an element tag with text "$$string_8" does not exist

@user5 @web
Scenario: ES5 Como usuario, quiero crear un post en la aplicación, verificar el cambio en el listado y si no me gusta eliminarlo. 
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "$email_5"
  And I enter password "$string_9"
  And I click login
  Then I verify that retry button exists
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on posts
  And I click on new post
  And I enter post title "$$string_5" in the content field
  And I enter post content "$string_6" in the content field
  And I click publish
  And I click continue, final review
  And I click publish post, right now
  And I click Back to editor
  And I click on posts
  Then I verify that a post with text "$$string_5" exists
  When I click on a post with name "$$string_5"
  And I click on the post options element
  And I scroll to the delete post button and click it
  Then I verify that a confirmation modal exists
  When I click on Delete
  Then I verify that a post with text "$$string_5" does not exist