Feature: Validacion funcionalidades Ghost

@user1 @web
Scenario: Como usuario, quiero crear una nueva publicación de blog
  Given I navigate to page "https://ghost-3llp.onrender.com/ghost/#/signin"
  When I enter email "testerJunior@gmail.com"
  And I enter password "testerjunior1"
  And I click login
  When I click on posts
  And I click on new post
  And I enter post title "titulo de la nueva publicación" in the content field
  And I enter post content "contenido de la nueva publicación" in the content field
  When I click publish
  Then I verify that a button with span continue final review exists
  When I click continue, final review
  Then I verify that a button with span Publish post, right now exists
  When I click publish post, right now
  And I click Back to editor
  And I click on posts
  And I click on posts
  Then I verify that a post with text "titulo de la nueva publicación" exists

@user2 @web
Scenario: Como usuario, quiero crear una nueva etiqueta
  Given I navigate to page "https://ghost-3llp.onrender.com/ghost/#/signin"
  When I enter email "testerJunior@gmail.com"
  And I enter password "testerjunior1"
  And I click login
  And I click on tags
  And I click on new tag
  And I enter tag name "Nueva Etiqueta"
  And I enter tag description "Descripción de la nueva etiqueta"
  And I click on save
  And I click on tags
  Then I verify that an element tag with text "Nueva Etiqueta" exists

@user3 @web
Scenario: Como usuario, quiero crear una nueva etiqueta, un nuevo post y agregar mi etiqueta al post
  Given I navigate to page "https://ghost-3llp.onrender.com/ghost/#/signin"
  When I enter email "testerJunior@gmail.com"
  And I enter password "testerjunior1"
  And I click login
  And I click on tags
  And I click on new tag
  And I enter tag name "Nueva Etiqueta post"
  And I enter tag description "Descripción de la nueva etiqueta"
  And I click on save
  And I click on tags
  Then I verify that an element tag with text "Nueva Etiqueta post" exists
  When I click on posts
  And I click on new post
  And I enter post title "Nueva publicación tag" in the content field
  And I enter post content "contenido de la nueva publicación tag" in the content field
  And I click publish
  And I click continue, final review
  And I click publish post, right now
  And I click Back to editor
  And I click on posts
  Then I verify that a post with text "Nueva publicación tag" exists
  When I click on a post with name "Nueva publicación tag"
  And I click on the post options element
  And I click on the tags dropdown
  And I select the tag option with text "Nueva Etiqueta post"
  And I click on Update
  Then I verify that an update notification exist

@user4 @web
Scenario: Como usuario, quiero crear una nueva etiqueta, y si no me gusta eliminarla. 
  Given I navigate to page "https://ghost-3llp.onrender.com/ghost/#/signin"
  When I enter email "testerJunior@gmail.com"
  And I enter password "testerjunior1"
  And I click login
  And I click on tags
  And I click on new tag
  And I enter tag name "Nueva Etiqueta eliminar"
  And I enter tag description "Descripción de la nueva etiqueta"
  And I click on save
  And I click on tags
  Then I verify that an element tag with text "Nueva Etiqueta eliminar" exists
  When I click on tag with name "Nueva Etiqueta eliminar"
  And I click on Delete tag
  Then I verify that an header with text "Are you sure you want to delete this tag?" exists
  When I click on Delete
  Then I verify that an element tag with text "Nueva Etiqueta eliminar" does not exist

@user5 @web
Scenario: Como usuario, quiero crear un post, y si no me gusta eliminarlo. 
  Given I navigate to page "https://ghost-3llp.onrender.com/ghost/#/signin"
  When I enter email "testerJunior@gmail.com"
  And I enter password "testerjunior1"
  And I click login
  And I click on posts
  And I click on new post
  And I enter post title "Nueva publicación eliminar" in the content field
  And I enter post content "contenido de la nueva publicación eliminar" in the content field
  And I click publish
  And I click continue, final review
  And I click publish post, right now
  And I click Back to editor
  And I click on posts
  Then I verify that a post with text "Nueva publicación eliminar" exists
  When I click on a post with name "Nueva publicación eliminar"
  And I click on the post options element
  And I scroll to the delete post button and click it
  Then I verify that a confirmation modal exists
  When I click on Delete
  Then I verify that a post with text "Nueva publicación eliminar" does not exist

@user6 @web
Scenario: Como usuario, quiero crear un post y verlo reflejado en el view site
  Given I navigate to page "https://ghost-3llp.onrender.com/ghost/#/signin"
  When I enter email "testerJunior@gmail.com"
  And I enter password "testerjunior1"
  And I click login
  And I click on posts
  And I click on new post
  And I enter post title "Nueva publicación site" in the content field
  And I enter post content "contenido de la nueva publicación site" in the content field
  And I click publish
  And I click continue, final review
  And I click publish post, right now
  And I click Back to editor
  And I click on posts
  And I click on view site
  And I click on posts
  Then I verify that a post with text "Nueva publicación site" exists

@user7 @web
Scenario: Como usuario, quiero crear una page
  Given I navigate to page "https://ghost-3llp.onrender.com/ghost/#/signin"
  When I enter email "testerJunior@gmail.com"
  And I enter password "testerjunior1"
  And I click login
  And I click on pages
  And I click on new page
  And I enter page title "My page" in the content field
  And I enter page content "My content page" in the content field
  And I click publish
  And I click continue, final review
  And I click publish page, right now
  And I click Back to editor
  And I click on pages
  Then I verify that a page with name "My page" exists