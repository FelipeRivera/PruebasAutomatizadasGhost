Feature: Validacion funcionalidades Ghost 5.80

@user1 @web
Scenario: ES1 Como usuario, quiero crear una nueva publicación de blog en la aplicación y verificar que se refleja en el listado exitosamente
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  When I click on posts
  And I click on new post
  And I enter post title "<NEW_POST>" in the content field
  And I enter post content "<NEW_POST_CONTENT>" in the content field
  When I click publish
  Then I verify that a button with span continue final review exists
  When I click continue, final review
  Then I verify that a button with span Publish post, right now exists
  When I click publish post, right now
  And I click Back to editor
  And I click on posts
  And I click on posts
  Then I verify that a post with text "<NEW_POST>" exists

@user2 @web
Scenario: ES2 Como usuario, quiero crear una nueva etiqueta en la aplicación y verificar que se refleja el cambio en el listado exitosamente
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on tags
  And I click on new tag
  And I enter tag name "<NEW_TAG>"
  And I enter tag description "<NEW_TAG_DES>"
  And I click on save
  And I click on tags
  Then I verify that an element tag with text "<NEW_TAG>" exists

@user3 @web
Scenario: ES3 Como usuario, quiero crear una nueva etiqueta y un nuevo post en la aplicación y ademas agregar mi etiqueta al post
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on tags
  And I click on new tag
  And I enter tag name "<NEW_TAG_POST>"
  And I enter tag description "<NEW_TAG_POST_DEST>"
  And I click on save
  And I click on tags
  Then I verify that an element tag with text "<NEW_TAG_POST>" exists
  When I click on posts
  And I click on new post
  And I enter post title "<NEW_POST_TAG>" in the content field
  And I enter post content "<NEW_POST_TAG_CONTENT>" in the content field
  And I click publish
  And I click continue, final review
  And I click publish post, right now
  And I click Back to editor
  And I click on posts
  Then I verify that a post with text "<NEW_POST_TAG>" exists
  When I click on a post with name "<NEW_POST_TAG>"
  And I click on the post options element
  And I click on the tags dropdown
  And I select the tag option with text "<NEW_TAG_POST>"
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
  And I enter tag name "<NEW_TAG_DEL>"
  And I enter tag description "<NEW_TAG_DES_DEL>"
  And I click on save
  And I click on tags
  Then I verify that an element tag with text "<NEW_TAG_DEL>" exists
  When I click on tag with name "<NEW_TAG_DEL>"
  And I click on Delete tag
  Then I verify that an header with text "<DELETE_TAG_VALIDATION>" exists
  When I click on Delete
  Then I verify that an element tag with text "<NEW_TAG_DEL>" does not exist

@user5 @web
Scenario: ES5 Como usuario, quiero crear un post en la aplicación, verificar el cambio en el listado y si no me gusta eliminarlo. 
  Given I navigate to page "<GHOST_5.80>"
  When I enter email "<USER>"
  And I enter password "<PASSWORD>"
  And I click login
  And I click on posts
  And I click on new post
  And I enter post title "<NEW_POST_DEL>" in the content field
  And I enter post content "<NEW_POST_CONTENT_DEL>" in the content field
  And I click publish
  And I click continue, final review
  And I click publish post, right now
  And I click Back to editor
  And I click on posts
  Then I verify that a post with text "<NEW_POST_DEL>" exists
  When I click on a post with name "<NEW_POST_DEL>"
  And I click on the post options element
  And I scroll to the delete post button and click it
  Then I verify that a confirmation modal exists
  When I click on Delete
  Then I verify that a post with text "<NEW_POST_DEL>" does not exist