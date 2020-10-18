import {instagram, twitter, dribbble, behance, linkedin} from '../../images/socials';

export default {
    menuOption: {
        menuColumns: [
            {
                title: 'The Company',
                routes: [
                    {
                        title: 'Who’s Who & What’s What',
                        route: ''
                    },
                    {
                        title: 'Our Partners',
                        route: ''
                    },
                    {
                        title: 'Client Results',
                        route: ''
                    },
                    {
                        title: 'Investors',
                        route: ''
                    },
                    {
                        title: 'Careers',
                        route: ''
                    },
                    {
                        title: 'Insights',
                        route: ''
                    },
                ]
            },
            {
                title: 'Help & Support',
                routes: [
                    {
                        title: 'FAQ',
                        route: ''
                    },  {
                        title: 'Help Centre',
                        route: ''
                    },  {
                        title: 'Connect with Us',
                        route: ''
                    },  {
                        title: 'Privacy',
                        route: ''
                    },  {
                        title: 'Terms',
                        route: ''
                    },

                ]
            },
            {
                title: 'Collaborate',
                routes: [
                    {
                        title: 'Become a Partner',
                        route: ''
                    },
                    {
                        title: 'Sponsor the Future',
                        route: ''
                    },
                    {
                        title: 'Work with Mo + Ken',
                        route: ''
                    },
                    {
                        title: 'Product Testing Team',
                        route: ''
                    },
                    {
                        title: 'Educate the Next Generation',
                        route: ''
                    },
                    {
                        title: 'Innovation Committee',
                        route: ''
                    },

                ]
            },
        ]
    },
    socialsMedia: [
        {image: twitter, link: ''},
        {image: behance, link: ''},
        {image: instagram, link: ''},
        {image: linkedin, link: ''},
        {image: dribbble, link: ''},
    ],
    styles: {
        joinFirstText: {
            display: 'block',
            marginTop: 40,
            marginBottom: 20,
            fontSize: 30,
            letterSpacing: 0.3
        },
        joinSecondText: {
            fontSize: 20,
        }
    }
}