**Buiild Week ttwpt_188(?) Sauti Africa MArketplace back-end**

# MVP endpoints will include:
    - POST method for new *user* registration
        - '/api/auth/registration'

    - POST method for existing *user* login (authentication)
        - '/api/auth/login'

    - GET method for ALL users to view current products and average price on site
        - '/api/products'

    - GET method for ALL users to view items being listed for sale
        - '/api/items'

    - GET method for ALL users to view items listed by specific 'owner'
        - '/api/items/:id', user_id passed as @param

    - POST method for authorized 'owners' to add new items
        - '/api/items/:ownerid'

    
