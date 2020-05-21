###This project was bootstrapped with [Create React App]####

##PROJECT STRUCTURE

1.This project uses rails structure. Files of the same type are kept in one single folder. For eg
presentational components are inside containers folder whereas dumb components are inside components folder.

2.All commonly accessed Root files like rootsaga, rootreducer, actiontypes, app.js and so have been capitalised.

3.This project uses modular css for local scope of css files inside component.

4. React router dom is used for routing. A 404 page has been setup for any other path besides '/'.

5. Material UI is used as the choice of design system.

6. Redux is used for state management. React-redux is used for bindings.

7. Redux saga is used as the middleware choice. Handles side effects better then redux thunk.

8. Axios is used for making api calls.

9. Prop types have been used for props validation.

10. Comments have been provided beside important code chunks.

##PROJECT FLOW

1. Dashboard component loads. Api is called to fetch users.

2. UserList component is populated with the same. By default first user in sorted list is shown.

3. On click of any user, the form gets populated respectively. All fields are required.

4. Form values which are not readonly(role, domain) can be changed.

5. On click of submit button the user is updated and the updated user list is logged to the console. The same is
updated in redux store as well.
