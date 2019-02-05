** If downloaded from github use Npm install in the server & client folder **

Frontend setup:
(In client folder)
prerequisites: Have vue-cli installed

1. vue create client                                                    -> Creates the project folder and initializes setup

2. Configure project
    2.1. Pick preset                                                    -> Manually select features
    2.2. Check the features needed for the project                      -> Choose babel, router, vuex, css pre-processor, linter
    2.3. Use history mode                                               -> Yes
    2.4. Pick css pre-processor                                         -> Sass/scss with node-sass
    2.5. Pick a linter/formatter config                                 -> Basic
    2.6. Pick additional lint features                                  -> Lint on save
    2.7. Pick place for configs                                         -> In package.json
    2.8. Save this preset for future projects                           -> No
    
3. Npm install axios --save                                             -> Axios makes it easy to perform HTTP request
                          