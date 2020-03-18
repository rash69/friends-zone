const users = [
    
    {
        "id":"1",
        "employee_name":"Tiger Nixon",
        "employee_salary":"320800",
        "employee_age":"61",
        "profile_image":"https://randomuser.me/api/portraits/men/5.jpg",
        "background": "https://images.unsplash.com/photo-1496507161348-aeec0403f141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-770-736-8036",
        "website": "hectorduran.org"
    },

    {
        "id":"2",
        "employee_name":"Garrett Winters","employee_salary":"170750",
        "employee_age":"63",
        "profile_image":"https://randomuser.me/api/portraits/women/72.jpg",
        "background": "https://images.unsplash.com/photo-1489276881971-eaa6ab4b6752?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-670-733-8032",
        "website": "kaylinstout.org"
    },

    {
        "id":"3",
        "employee_name":"Ashton Cox",
        "employee_salary":"86000",
        "employee_age":"66",
        "profile_image":"https://randomuser.me/api/portraits/men/1.jpg",
        "background": "https://images.unsplash.com/photo-1517056592025-0e4b9bda8618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        "phone": "1-679-232-6032",
        "website": "damontran.org"

    },

    {
        "id":"4","employee_name":"Cedric Kelly","employee_salary":"433060","employee_age":"22","profile_image":"https://randomuser.me/api/portraits/men/77.jpg", "background": "https://images.unsplash.com/photo-1431032843361-ec2cd229c751?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-970-736-1136",
        "website": "seanorozco.org"
    },

    {"id":"5","employee_name":"Airi Satou","employee_salary":"162700","employee_age":"33","profile_image":"https://randomuser.me/api/portraits/women/40.jpg", "background": "https://images.unsplash.com/photo-1486065501750-23ac4604c414?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "phone": "1-670-733-1239",
    "website": "felicityesparza.org"
    },

    {
        "id":"6","employee_name":"Brielle Williamson","employee_salary":"372000","employee_age":"61","profile_image":"https://randomuser.me/api/portraits/men/41.jpg", "background": "https://images.unsplash.com/photo-1506824547206-4944534291d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=774&q=80",
        "phone": "1-679-912-6032",
        "website": "jairmartin.org"
    },
    
    {
        "id":"7","employee_name":"Herrod Chandler","employee_salary":"137500","employee_age":"59","profile_image":"https://randomuser.me/api/portraits/women/21.jpg", "background": "https://images.unsplash.com/photo-1431683535750-2b9b2371efb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-210-736-4556",
        "website": "harmonymerritt.org"
    },
    
    {
        "id":"8","employee_name":"Rhona Davidson","employee_salary":"327900","employee_age":"55","profile_image":"https://randomuser.me/api/portraits/men/54.jpg", "background": "https://images.unsplash.com/photo-1521405305633-c75900143740?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
        "phone": "1-670-733-1090",
        "website": "omarcrawford.org"
    },
    
    {
        "id":"9","employee_name":"Colleen Hurst","employee_salary":"205500","employee_age":"39","profile_image":"https://randomuser.me/api/portraits/women/71.jpg", "background": "https://images.unsplash.com/photo-1445262801997-d50c1f12cb4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-619-895-3093",
        "website": "brennadavid.org"
    },

    {
        "id":"10","employee_name":"Sonya Frost","employee_salary":"103600","employee_age":"23","profile_image":"https://randomuser.me/api/portraits/women/50.jpg", "background": "https://images.unsplash.com/photo-1534521296698-8ab27b628bf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80",
        "phone": "1-970-736-1136",
        "website": "janecharles.org"
    },

    {
        "id":"11","employee_name":"Jena Gaines","employee_salary":"90560","employee_age":"30","profile_image":"https://randomuser.me/api/portraits/men/11.jpg", "background": "https://images.unsplash.com/photo-1536677893464-7ea19355bbc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-110-733-7897", "website": "janecharles.org"
    },
    
    {
        "id":"12","employee_name":"Quinn Flynn","employee_salary":"342000","employee_age":"22","profile_image":"https://randomuser.me/api/portraits/men/52.jpg", "background": "https://images.unsplash.com/photo-1529552211908-f76609073378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=875&q=80",
        "phone": "1-420-932-1783",
        "website": "damianwalters.org",
    },
    {
        "id":"13","employee_name":"Charde Marshall","employee_salary":"470600","employee_age":"36","profile_image":"https://randomuser.me/api/portraits/women/26.jpg", "background": "https://images.unsplash.com/photo-1524878937320-aff106b195ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-202-555-0123",
        "website": "francescatorres.org"
    },
    {
        "id":"14","employee_name":"Haley Kennedy","employee_salary":"313500","employee_age":"43","profile_image":"https://randomuser.me/api/portraits/women/62.jpg", "background": "https://images.unsplash.com/photo-1528732807373-00017d0cb032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "phone": "1-202-555-0150",
        "website": "andradejeremiah.org"
    },
    {
        "id":"15","employee_name":"Tatyana Fitzpatrick","employee_salary":"385750","employee_age":"19","profile_image":"https://randomuser.me/api/portraits/women/90.jpg", "background": "https://images.unsplash.com/photo-1506744476757-8407c4647c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "phone": "1-202-555-0114",
        "website": "daniellaandrews.org"
    },
    {
        "id":"16","employee_name":"Michael Silva","employee_salary":"198500","employee_age":"66","profile_image":"https://picsum.photos/id/237/200/300",
        "background": "https://picsum.photos/seed/picsum/200/300",
        "phone": "1-202-555-0022",
        "website": "micheli.silav.org"
    },
    {
        "id":"17","employee_name":"Paul Byrd","employee_salary":"725000","employee_age":"64","profile_image":"https://picsum.photos/seed/picsum/200/300", "background": "https://picsum.photos/id/237/200/300",
        "phone": "1-202-555-4574",
        "website": "paulu8264.org"
    },
    {
        "id":"18","employee_name":"Gloria Little","employee_salary":"237500","employee_age":"59","profile_image":"https://randomuser.me/api/portraits/men/52.jpg", "background": "https://picsum.photos/id/870/200/300?grayscale&blur=2", "phone": "1-202-555-4574",
        "website": "littlefoggy.org"
    },
    {
        "id":"19","employee_name":"Bradley Greer","employee_salary":"132000","employee_age":"41","profile_image":"https://picsum.photos/200/300?grayscale",
        "background": "https://picsum.photos/200/300/?blur",
        "phone": "1-202-555-4574",
        "website": "bradlyg0.org"
    },
    {
        "id":"20","employee_name":"Dai Rios","employee_salary":"217500","employee_age":"35","profile_image":"https://picsum.photos/200/300/?blur", "background": "https://picsum.photos/200/300?grayscale", "phone": "1-202-555-4574",
        "website": "dairois.org"
    }
]

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(users);

export default users;