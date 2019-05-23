export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce6bfa73906f179b64b0f90',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-fed354xk',
                  apiId: '6833bfd5-10ee-4077-ba25-fe31dabdf040'
                },
                {
                  buildHookId: '5ce6bfa7afaf53b76fc21f11',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-t5gmnzwx',
                  apiId: '3b4a5174-a9e9-4f17-898e-ef148fb69b69'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pthulasiram/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-t5gmnzwx.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
