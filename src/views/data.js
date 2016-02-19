var marked = require('marked');

var bio = {
  shortBio: marked(
    '<p>'
    + 'I am an associate professor at [Cornell Tech](http://tech.cornell.edu/) where where I am the founder of the Connective Media hub, and lead the Social Technologies research group. '
    + 'I sometimes consult or even co-found startups. '
    + 'Previously, I was an assistant professor at [Rutgers SC&I](http://comminfo.rutgers.edu/), led a research team at Yahoo! Research Berkeley, and got a [PhD from Stanford](http://infolab.stanford.edu/). '
    + 'Oh, and played professional basketball.'
    + '</p> <p>'
    + 'My lab will be **taking at least one new PhD student in 2016** with priority for people with strong builder/CS background.'
    + '</p>'
  ),
  fullBio: marked(
    '<p>'
    + 'Mor Naaman is an associate professor of [Information Science](http://infosci.cornell.edu/) at the [Jacobs Institute](http://jacobs.cornell.edu/) at [Cornell Tech](http://tech.cornell.edu/), where he is the founder of the Connective Media hub, leads a [research group focused on social technologies](https://s.tech.cornell.edu/), and directs the [AOL Connected Experiences laboratory](https://cx.jacobs.cornell.edu/).'
    + '</p> <p>'
    + 'His research applies multidisciplinary methods to 1) gain a better understanding of people and their use of social tech; 2) extract insights about people, technology and society from social media and other sources of social data, and 3) develop new social technologies as well as novel tools to make social data more accessible and usable in various settings.'
    + '</p> <p>'
    + 'Previously, Mor was on the faculty at the [Rutgers School of Communication and Information](http://comminfo.rutgers.edu/), led a research team at Yahoo! Research Berkeley, received a Ph.D. in Computer Science from the [Stanford University InfoLab](http://infolab.stanford.edu/), and played professional basketball for Hapoel Tel Aviv. He is a recipient of a NSF Early Faculty CAREER Award, research awards and grants from numerous corporations including AOL and Google, and multiple best paper awards.'
    + '</p> <p>'
    + 'Additional [High-res](https://www.flickr.com/photos/mmoorr/15592772261/sizes/z/) [headshots](https://www.flickr.com/photos/mmoorr/15516802398/sizes/z/) (I\'ll like you better if you pick the polka dot one).'
    + '</p>'
  )
};

var news = [
  {
    date: '30 Nov 2015',
    title: 'My lab is hiring new PhD students this year. To work with us, you can apply to the Cornell [IS](http://infosci.cornell.edu/academics/phd) or [CS](https://www.cs.cornell.edu/phd) PhD programs.'
  },
  {
    date: '12 Nov 2014',
    title: 'AOL [announces](http://blog.aol.com/2014/11/12/aol-launches-connected-experience-lab-with-jacobs-technion-corne/) gift to start Connected Experiences (Conn.X) Laboratory at Jacobs Institute and Cornell Tech, co-founded by me.'
  }
].map(function(n) {
  n.title = marked(n.title);
  return n;
});

var publications = [
  [
    {
      year: '2015',
      title: 'Editorial Algorithms: Using Social Media to Discover and Report Local News',
      author: 'Raz Schwarz, Mor Naaman, Rannie Teodoro',
      source: 'ICWSM 2015',
      sourceLink: 'http://www.icwsm.org/2015/',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Schwartz_ICWSM2015_CityBeat.pdf'
    },
    {
      year: '2015',
      title: 'Understanding Musical Diversity via Online Social Media',
      author: 'Minsu Park, Ingmar Weber, Mor Naaman, Sarah Vieweg',
      source: 'ICWSM 2015',
      sourceLink: 'http://www.icwsm.org/2015/',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Park_ICWSM2015_MusicalDiversity.pdf'
    },
    {
      year: '2015',
      title: 'On the Accuracy of Hyper-local Geotagging of Social Media Content',
      author: 'David Flatow, Mor Naaman, Ke Eddie Xie, Yana Volkovich, Yaron Kanza',
      source: 'WSDM 2015',
      sourceLink: 'http://www.wsdm-conference.org/2015/',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/flatow_wsdm2015_geocoding.pdf'
    }
  ], 
  [
    {
      year: '2014',
      title: 'Understanding Loneliness in Social Awareness Streams: Expressions and Responses',
      author: 'Funda Kivran-Swaine, Jeremy Ting, Jed Richards Brubaker, Rannie Teodoro, Mor Naaman',
      source: 'ICWSM 2014',
      sourceLink: 'http://www.icwsm.org/2014/',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/KivranSwaine_ICWSM2014_loneliness.pdf'
    },
    {
      year: '2014',
      title: 'The Motivations and Experiences of the On-demand Mobile Workforce',
      author: 'Rannie Teodoro, Pinar Ozturk, Mor Naaman, Winter Mason, and Janne Lindqvist',
      source: 'CSCW 2014',
      sourceLink: 'http://cscw.acm.org/2014/',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Teodoro_CSCW2014_mobile_workforce.pdf'
    }
  ], 
  [
    {
      year: '2013',
      title: 'Effects of Gender and Tie Strength on Twitter Interactions',
      author: 'Funda Kivran-Swaine, Samuel Brody and Mor Naaman',
      source: 'First Monday, 18(9). doi:10.5210/fm.v18i9.4633',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/KivranSwaine_1stMonday_EffectsGenderTwitterInteractions.pdf'
    },
    {
      year: '2013',
      title: 'Extracting Diurnal Patterns of Real World Activity from Social Media',
      author: 'Nir Grinberg, Mor Naaman, Blake Shaw, and Gilad Lotan',
      source: 'ICWSM 2013',
      sourceLink: 'http://www.icwsm.org/2013/',
      paperLink: 'http://sm.rutgers.edu/pubs/Grinberg-SMPatterns-ICWSM2013.pdf'
    },
    {
      year: '2013',
      title: 'Fitter with Twitter: Understanding Personal Health and Fitness Activity in Social Media',
      author: 'Rannie Teodoro and Mor Naaman',
      source: 'ICWSM 2013',
      sourceLink: 'http://www.icwsm.org/2013/',
      paperLink: 'http://sm.rutgers.edu/pubs/Teodoro-FitterTwitter-ICWSM2013.pdf'
    }
  ], 
  [
    {
      year: '2012',
      title: 'Making a Scene: Alignment of Complete Sets of Clips based on Pairwise Audio Match',
      author: 'Kai Su, Mor Naaman, Avadhut Gurjar, Mohsin Patel, and Dan Ellis',
      source: 'ICMR 2012',
      sourceLink: 'http://www.icmr2012.org/',
      paperLink: 'http://sm.rutgers.edu/pubs/su-makingscene-icmr2012.pdf'
    },
    {
      year: '2012',
      title: 'On the Study of Diurnal Urban Routines on Twitter',
      author: 'Mor Naaman, Amy Zhang, Samuel Brody, and Gilad Lotan',
      source: 'ICWSM 2012',
      sourceLink: 'http://www.icwsm.org/2012/',
      paperLink: 'http://sm.rutgers.edu/pubs/naaman-twitterpatterns-icwsm2012.pdf'
    },
    {
      year: '2012',
      title: 'Identifying Content for Planned Events Across Social Media Sites',
      author: 'Hila Becker, Dan Iter, Mor Naaman and Luis Gravano',
      source: 'WSDM 2012',
      sourceLink: 'http://wsdm2012.org/',
      paperLink: 'http://sm.rutgers.edu/pubs/becker-events-wsdm2012.pdf'
    },
    {
      year: '2012',
      title: 'Unfolding the Event Landscape on Twitter: Classification and Exploration of User Categories',
      author: 'Munmun De Choudhury, Nicholas Diakopoulos, and Mor Naaman',
      source: 'CSCW 2012',
      sourceLink: 'http://www.icwsm.org/2013/',
      paperLink: 'http://sm.rutgers.edu/pubs/dechoudhury-userclassification-cscw2012.pdf'
    },
    {
      year: '2012',
      title: 'Practices of information and secrecy in a punk rock subculture',
      author: 'Jessa Lingel, Aaron Trammell, Joe Sanchez, and Mor Naaman',
      source: 'CSCW 2012',
      sourceLink: 'http://cscw2010.org/',
      paperLink: 'http://sm.rutgers.edu/pubs/lingel-secercy-socialmedia-cscw2012.pdf'
    },
    {
      year: '2012',
      title: 'You Should Have Been There, Man: Live Music, DIY Content and Online Communities',
      author: 'Jessa Lingel and Mor Naaman',
      source: 'New Media & Society',
      sourceLink: 'http://nms.sagepub.com/',
      paperLink: 'http://sm.rutgers.edu/pubs/lingel-NMS2011.pdf'
    }
  ], 
];

module.exports = {
  bio: bio,
  news: news,
  publications: publications
};
