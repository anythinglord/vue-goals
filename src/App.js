let App = {
    name: 'app',
    data() {
        return {
            message: 'Hello Vue!',
            titleMessage: 'Title Message Vue!!!!!',
            isTestDisplayed: true,
            isFormDisplayed: false,
            newActivity:{
                title: '',
                notes: ''
            },
            items: {
                1:{name: 'Filip', old:18},
                2:{name: 'Clara', old:19},
                3:{name: 'Klark', old:18},
            },
            user: {
                name: 'Pepito perez',
                id: '-Aj34jknvncx98812',
            },
            activities: {
                '1546968934': {
                    id: '1546968934',
                    title: 'Learn Vue.js',
                    notes: 'I started today and it was not good.',
                    progress: 0,
                    category: '1546969049',
                    createdAt: 1546969144391,
                    updatedAt: 1546969144391
                },
                '1546969212': {
                    id: '1546969212',
                    title: 'Read Witcher Books',
                    notes: 'These books are super nice',
                    progress: 0,
                    category: '1546969049',
                    createdAt: 1546969144391,
                    updatedAt: 1546969144391
                }
            },
            categories: {
                '1546969049': {text: 'books'},
                '1546969225': {text: 'movies'}
            }
        }
    },
    methods:{
        
    }
}

export default App;