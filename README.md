**Build Week ttwpt_188 Sauti Africa Marketplace back-end**

# Current working endpoints include:
    - POST method for new *user* registration
        - '/api/auth/registration'

    - POST method for existing *user* login (authentication)
        - '/api/auth/login'

    - GET method for ALL users to view current products on site
        - '/api/products/' returns all products
        - '/api/products/:id/' returns product w/ matching id and corresponding info

    - GET method for ALL users to view product categories
        - '/api/categories/' returns all roduct categories and corresponding info
        - '/api/categories/:id/' returns matching category and all products within it sorted by sub-category

# Proposed functionality not implemented
    - GET method for ALL users to view items listed by specific 'owner'
        - '/api/items/:id', user_id passed as @param

    - POST method for authorized 'owners' to add new items
        - '/api/items/:ownerid'    

    
