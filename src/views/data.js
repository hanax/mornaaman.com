var marked = require('marked');

var bio = {
  shortBio: marked(
    '<p>'
    + 'I am an associate professor at [Cornell Tech](http://tech.cornell.edu/) where I am the founder of the Connective Media hub, and lead the [Social Technologies](http://stech.nyc) research group. '
    + 'I sometimes consult or even co-found startups. '
    + 'Previously, I was an assistant professor at [Rutgers SC&I](http://comminfo.rutgers.edu/), led a research team at Yahoo! Research Berkeley, and got a [PhD from Stanford](http://infolab.stanford.edu/). '
    + 'Oh, and played professional basketball.'
    + '</p> <p>'
    + 'My lab designs, builds, and studies systems that support social interactions in online and physical spaces. Our sponsors include [AOL](http://connectedexperiences.org), Google, Facebook and the National Science Foundation. '
    + '</p>'
  ),
  fullBio: marked(
    '<p>'
    + 'Mor Naaman is an associate professor of [Information Science](http://infosci.cornell.edu/) at the [Jacobs Institute](http://jacobs.cornell.edu/) at [Cornell Tech](http://tech.cornell.edu/), where he is the founder of the Connective Media hub, leads a [research group focused on social technologies](https://s.tech.cornell.edu/), and directs the [AOL Connected Experiences laboratory](https://cx.jacobs.cornell.edu/).'
    + '</p> <p>'
    + 'His research group designs, builds, and studies systems that support social interactions in online and physical spaces. '
    + 'Mor applies multidisciplinary methods to 1) gain a better understanding of people and their use of social tech; 2) extract insights about people, technology and society from social media and other sources of social data, and 3) develop new social technologies as well as novel tools to make social data more accessible and usable in various settings. '
    + '</p> <p>'
    + 'Previously, Mor was on the faculty at the [Rutgers School of Communication and Information](http://comminfo.rutgers.edu/), led a research team at Yahoo! Research Berkeley, received a Ph.D. in Computer Science from the [Stanford University InfoLab](http://infolab.stanford.edu/), and played professional basketball for Hapoel Tel Aviv. He is a recipient of a NSF Early Faculty CAREER Award, research awards and grants from numerous corporations including AOL and Google, and multiple best paper awards.'
    + '</p> <p>'
    + 'If I am speaking at your event, additional high-res headshots are available: [1](https://www.flickr.com/photos/mmoorr/15592772261/sizes/z/) [2](https://www.flickr.com/photos/mmoorr/15516802398/sizes/z/) (I\'ll like you better if you pick the polka dot one).'
    + '</p>'
  )
};

var news = [
  {
    date: '18 Feb 2016',
    title: 'I am giving an [invited talk](http://www.wsdm-conference.org/2016/invited-speakers.html#pe-naaman) at WSDM 2016 about my research and startup experiences around events in social media. '
  },
  {
    date: '10 Feb 2016',
    title: 'Two upcoming CHI 2016 papers from my lab are available [here](http://stech.nyc) -- including one best paper honorable mention. '
  },
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
      year: '2016',
      title: 'Immersive Recommendation: News and Event Recommendations Using Personal Digital Traces',
      author: 'Cheng-Kang Hsieh, Longqi Yang, Honghao Wei, Mor Naaman, Deborah Estrin',
      source: 'WWW 2016',
      sourceLink: 'http://www2016.ca/',
      paperLink: 'http://www.cs.cornell.edu/~ylongqi/publications/HsiehYWNE16.pdf'
    },
    {
      year: '2016',
      title: 'Anonymity, Intimacy and Self-Disclosure in Social Media',
      author: 'Xiao Ma, Jeff Hancock, Mor Naaman',
      source: 'CHI 2016',
      sourceLink: 'https://chi2016.acm.org/',
      paperLink: 'https://s.tech.cornell.edu/assets/papers/anonymity-intimacy-disclosure.pdf'
    },
    {
      year: '2016',
      title: 'Changes in Engagement Before and After Posting to Facebook',
      author: 'Nir Grinberg, P. Alex Dow, Lada A. Adamic, Mor Naaman',
      source: 'CHI 2016',
      sourceLink: 'https://chi2016.acm.org/',
      paperLink: 'http://www.nirg.net/papers/contribution2016grinberg.pdf'
    }
  ], 
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
      author: 'Rannie Teodoro, Pinar Ozturk, Mor Naaman, Winter Mason, Janne Lindqvist',
      source: 'CSCW 2014',
      sourceLink: 'http://cscw.acm.org/2014/',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Teodoro_CSCW2014_mobile_workforce.pdf'
    }
  ], 
  [
    {
      year: '2013',
      title: 'Effects of Gender and Tie Strength on Twitter Interactions',
      author: 'Funda Kivran-Swaine, Samuel Brody, Mor Naaman',
      source: 'First Monday, 18(9). doi:10.5210/fm.v18i9.4633',
      paperLink: 'https://people.jacobs.cornell.edu/mor/publications/thegoods/KivranSwaine_1stMonday_EffectsGenderTwitterInteractions.pdf'
    },
    {
      year: '2013',
      title: 'Extracting Diurnal Patterns of Real World Activity from Social Media',
      author: 'Nir Grinberg, Mor Naaman, Blake Shaw, Gilad Lotan',
      source: 'ICWSM 2013',
      sourceLink: 'http://www.icwsm.org/2013/',
      paperLink: 'http://sm.rutgers.edu/pubs/Grinberg-SMPatterns-ICWSM2013.pdf'
    },
    {
      year: '2013',
      title: 'Fitter with Twitter: Understanding Personal Health and Fitness Activity in Social Media',
      author: 'Rannie Teodoro, Mor Naaman',
      source: 'ICWSM 2013',
      sourceLink: 'http://www.icwsm.org/2013/',
      paperLink: 'http://sm.rutgers.edu/pubs/Teodoro-FitterTwitter-ICWSM2013.pdf'
    }
  ], 
  [
    {
      year: '2012',
      title: 'Making a Scene: Alignment of Complete Sets of Clips based on Pairwise Audio Match',
      author: 'Kai Su, Mor Naaman, Avadhut Gurjar, Mohsin Patel, Dan Ellis',
      source: 'ICMR 2012',
      sourceLink: 'http://www.icmr2012.org/',
      paperLink: 'http://sm.rutgers.edu/pubs/su-makingscene-icmr2012.pdf'
    },
    {
      year: '2012',
      title: 'On the Study of Diurnal Urban Routines on Twitter',
      author: 'Mor Naaman, Amy Zhang, Samuel Brody, Gilad Lotan',
      source: 'ICWSM 2012',
      sourceLink: 'http://www.icwsm.org/2012/',
      paperLink: 'http://sm.rutgers.edu/pubs/naaman-twitterpatterns-icwsm2012.pdf'
    },
    {
      year: '2012',
      title: 'Identifying Content for Planned Events Across Social Media Sites',
      author: 'Hila Becker, Dan Iter, Mor Naaman, Luis Gravano',
      source: 'WSDM 2012',
      sourceLink: 'http://wsdm2012.org/',
      paperLink: 'http://sm.rutgers.edu/pubs/becker-events-wsdm2012.pdf'
    },
    {
      year: '2012',
      title: 'Unfolding the Event Landscape on Twitter: Classification and Exploration of User Categories',
      author: 'Munmun De Choudhury, Nicholas Diakopoulos, Mor Naaman',
      source: 'CSCW 2012',
      sourceLink: 'http://www.icwsm.org/2013/',
      paperLink: 'http://sm.rutgers.edu/pubs/dechoudhury-userclassification-cscw2012.pdf'
    },
    {
      year: '2012',
      title: 'Practices of information and secrecy in a punk rock subculture',
      author: 'Jessa Lingel, Aaron Trammell, Joe Sanchez, Mor Naaman',
      source: 'CSCW 2012',
      sourceLink: 'http://cscw2010.org/',
      paperLink: 'http://sm.rutgers.edu/pubs/lingel-secercy-socialmedia-cscw2012.pdf'
    },
    {
      year: '2012',
      title: 'You Should Have Been There, Man: Live Music, DIY Content and Online Communities',
      author: 'Jessa Lingel, Mor Naaman',
      source: 'New Media & Society, 14(2), March 2012.',
      sourceLink: 'http://nms.sagepub.com/',
      paperLink: 'http://sm.rutgers.edu/pubs/lingel-NMS2011.pdf'
    }
  ], 
  [
    {
      year: '2011',
      title: 'Beyond Trending Topics: Real-World Event Identification on Twitter',
      author: 'Hila Becker, Mor Naaman, Luis Gravano',
      source: 'ICWSM 2011',
      sourceLink: 'http://www.icwsm.org/2011/',
      paperLink: 'http://sm.rutgers.edu/pubs/becker35-icwsm2011.pdf'
    },
    {
      year: '2011',
      title: 'Selecting Quality Twitter Content for Events',
      author: 'Hila Becker, Mor Naaman, Luis Gravano',
      source: 'ICWSM 2011',
      sourceLink: 'http://www.icwsm.org/2011/',
      paperLink: 'http://sm.rutgers.edu/pubs/becker82-icwsm2011.pdf'
    },
    {
      year: '2011',
      title: 'Hip and Trendy: Characterizing Emerging Trends on Twitter',
      author: 'Mor Naaman, Hila Becker, Luis Gravano',
      source: 'JASIST',
      sourceLink: 'http://www.asis.org/jasist.html',
      paperLink: 'http://comminfo.rutgers.edu/~mor/publications/NaamanJasistTwitterTrends.pdf'
    },
    {
      year: '2011',
      title: 'The Impact of Network Structure on Breaking Ties in Online Social Networks: Unfollowing on Twitter',
      author: 'Funda Kivran-Swaine, Priya Govindan, Mor Naaman',
      source: 'CHI 2011',
      sourceLink: 'http://chi2011.org/',
      paperLink: 'http://comminfo.rutgers.edu/~mor/publications/kivranswaineCHI2011.pdf'
    },
    {
      year: '2011',
      title: 'Playable Data: Characterizing the Design Space of Game-y Infographics',
      author: 'Nicholas Diakopoulos, Mor Naaman, Funda Kivran-Swaine',
      source: 'CHI 2011',
      sourceLink: 'http://chi2011.org/',
      paperLink: 'http://comminfo.rutgers.edu/~mor/publications/diakopoulosCHI2011.pdf'
    },
    {
      year: '2011',
      title: 'Network Properties and Social Sharing of Emotions in Social Awareness Streams',
      author: 'Funda Kivran-Swaine, Mor Naaman',
      source: 'CSCW 2011',
      sourceLink: 'http://cscw2011.org/',
      paperLink: 'http://comminfo.rutgers.edu/~mor/publications/kivranswainecscw2011.pdf'
    },
    {
      year: '2011',
      title: 'Towards Quality Discourse in Online News Comments',
      author: 'Nicholas Diakopoulos, Mor Naaman',
      source: 'CSCW 2011',
      sourceLink: 'http://cscw2011.org/',
      paperLink: 'http://comminfo.rutgers.edu/~mor/publications/diakopoulosCSCW2011.pdf'
    }
  ], 
  [
    {
      year: '2010',
      title: 'Social multimedia: highlighting opportunities for search and mining of multimedia data in social media applications',
      author: 'Mor Naaman',
      source: 'MTAPP',
      sourceLink: 'http://www.springer.com/computer/information+systems+and+applications/journal/11042',
      paperLink: 'http://comminfo.rutgers.edu/~mor/publications/NaamanMTAP10socialMultimedia.pdf',
      extraInfo: '[Published Online First](http://www.springerlink.com/content/v836432078k27014/?p=8cf4735132d64e02a0352d2a4b8c2e65&pi=9)'
    },
    {
      year: '2010',
      title: 'Diamonds in the Rough: Social Media Visual Analytics for Journalistic Inquiry',
      author: 'Nicholas Diakopoulos, Mor Naaman, Funda Kivran-Swaine',
      source: 'VAST 2010',
      sourceLink: 'http://vis.computer.org/VisWeek2010/vast.html',
      paperLink: 'http://comminfo.rutgers.edu/~mor/publications/DiakVast10.pdf'
    },
    {
      year: '2010',
      title: 'Analysis of Participation in an Online Photo-Sharing Community: A Multidimensional Perspective',
      author: 'Oded Nov, Mor Naaman, Chen Ye',
      source: 'JASIST',
      sourceLink: 'http://www.asis.org/jasist.html',
      paperLink: 'http://infolab.stanford.edu/~mor/research/NovNaamanYeJASIST2010.pdf'
    },
    {
      year: '2010',
      title: 'Learning Similarity Metrics for Event Identification in Social Media',
      author: 'Hila Becker, Mor Naaman, Luis Gravano',
      source: 'WSDM 2010',
      sourceLink: 'http://www.wsdm-conference.org/2010/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/becker-wsdm10.pdf'
    },
    {
      year: '2010',
      title: 'Is it Really About Me? Message Content in Social Awareness Streams',
      author: 'Mor Naaman, Jeff Boase, Chih-Hui Lai',
      source: 'CSCW',
      sourceLink: 'http://www.cscw2010.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/naamanCSCW10.pdf'
    },
    {
      year: '2010',
      title: 'Requirements for Mobile Photoware',
      author: 'Morgan Ames, Dean Eckles, Mor Naaman, Mirjana Spasojevic, Nancy Van House',
      source: 'Journal of Personal and Ubiquitous Computing vol. 14(2), February 2010.',
      sourceLink: 'http://www.springerlink.com/content/106503/?p=55e89f8ab2c14cba9ec78c759b9e796c&pi=0',
      paperLink: 'http://infolab.stanford.edu/~mor/research/NovNaamanYeJASIST2010.pdf'
    }
  ], [
    {
      year: '2009',
      title: 'Social Inference Risk Modeling in Mobile and Social Applications',
      author: 'Sara Motahari, Sotirios Ziavras, Mor Naaman, Mohamed Ismail, Quentin Jones',
      source: 'PASSAT 2009',
      sourceLink: 'http://cse.stfx.ca/~passat09/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/motahariPASSAT09.pdf'
    },
    {
      year: '2009',
      title: 'Event Identification in Social Media',
      author: 'Hila Becker, Mor Naaman, Luis Gravano',
      source: 'WebDB 2009',
      sourceLink: 'http://webdb09.cse.buffalo.edu/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/beckerWebDB2009.pdf'
    },
    {
      year: '2009',
      title: 'Motivational, Structural and Tenure Factors that Impact Online Community Photo Sharing',
      author: 'Oded Nov, Mor Naaman, Chen Ye',
      source: 'ICWSM 2009',
      sourceLink: 'http://www.icwsm.org/2009/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/Nov_Naaman_Ye_ICWSM_2009_final.pdf',
      award: 'Best Paper Award'
    },
    {
      year: '2009',
      title: 'Less Talk, More Rock: Automated Organization of Community-Contributed Collections of Concert Videos',
      author: 'Lyndon Kennedy, Mor Naaman',
      source: 'WWW 2009',
      sourceLink: 'http://www.www2009.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/KennedyLessTalkWWW2009.pdf'
    },
    {
      year: '2009',
      title: 'Methods for extracting place semantics from Flickr tags',
      author: 'Tye Rattenbury, Mor Naaman',
      source: 'ACM Trans. Web, vol. 3(1), Article 1 (January 2009).',
      sourceLink: 'http://tweb.acm.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/RattenburyPlacesSemanticsTweb09.pdf'
    },
    {
      year: '2008',
      title: 'ZoneTag\'s Collaborative Tag Suggestions: What is This Person Doing in My Phone?',
      author: 'Mor Naaman, Rahul Nair',
      source: 'IEEE Multimedia, vol. 15 (3), pp. 34-40, July-Sept. 2008.',
      sourceLink: 'http://infolab.stanford.edu/~mor/research.html',
      paperLink: 'http://infolab.stanford.edu/~mor/research/ZoneTagIEEEMM.pdf'
    },
    {
      year: '2008',
      title: 'Generating Diverse and Representative Image Search Results for Landmarks',
      author: 'Lyndon Kennedy, Mor Naaman',
      source: 'WWW 2008',
      sourceLink: 'http://www.www2008.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/kennedy-www08.pdf'
    },
    {
      year: '2008',
      title: 'Photos on the Go: A Mobile Application Case Study',
      author: 'Mor Naaman, Rahul Nair, Vlad Kaplun',
      source: 'CHI 2008',
      sourceLink: 'http://chi2008.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/Naaman-chi08-photosmobile.pdf'
    },
    {
      year: '2008',
      title: '[Note] What Drives Content Tagging: The Case of Photos on Flickr',
      author: 'Oded Nov, Mor Naaman, Chen Ye',
      source: 'CHI 2008',
      sourceLink: 'http://chi2008.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/Nov-CHI08-whatdrivestagging.pdf'
    },
    {
      year: '2007',
      title: 'How Flickr Helps us Make Sense of the World: Context and Content in Community-Contributed Media Collections.',
      author: 'Lyndon Kennedy, Mor Naaman, Shane Ahern, Rahul Nair, Tye Rattenbury',
      source: 'ACM MM 2007',
      sourceLink: 'http://mmc36.informatik.uni-augsburg.de/acmmm2007/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/kennedyMM07.pdf'
    },
    {
      year: '2007',
      title: '[Short] Zurfer: Mobile Multimedia Access in Spatial, Social and Topical Context',
      author: 'Amy Hwang, Shane Ahern, Simon King, Mor Naaman, Rahul Nair, Jeannie Yang',
      source: 'ACM MM 2007',
      sourceLink: 'http://mmc36.informatik.uni-augsburg.de/acmmm2007/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/hwang-mm07-zurfer.pdf'
    },
    {
      year: '2007',
      title: 'Towards Automatic Extraction of Event and Place Semantics from Flickr Tags',
      author: 'Tye Rattenbury, Nathan Good, Mor Naaman',
      source: 'SIGIR 2007',
      sourceLink: 'http://www.sigir2007.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/sigir2007rattenburyTagSemantics.pdf'
    },
    {
      year: '2007',
      title: 'World Explorer: Visualizing Aggregate Data from Unstructured Text in Geo-Referenced Collections',
      author: 'Shane Ahern, Mor Naaman, Rahul Nair, Jeannie Yang',
      source: 'JCDL 2007',
      sourceLink: 'http://www.jcdl2007.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/JCDL07-ahern-WorldExplorer.pdf',
      award: 'Vannevar Bush Best Paper Award'
    },
    {
      year: '2007',
      title: 'Why We Tag: Motivations for Annotation in Mobile and Online Media',
      author: 'Morgan Ames, Mor Naaman',
      source: 'CHI 2007',
      sourceLink: 'http://chi2007.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/chi2007-Ames-whyWeTag.pdf'
    },
    {
      year: '2007',
      title: 'Over-Exposed? Privacy Patterns and Considerations in Online and Mobile Photo Sharing',
      author: 'Shane Ahern, Dean Eckles, Nathan Good, Simon King, Mor Naaman, Rahul Nair',
      source: 'CHI 2007',
      sourceLink: 'http://chi2007.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/chi241-ahern-mediaprivacy.pdf'
    },
    {
      year: '2006',
      title: '(Invited column) Eyes on the World',
      author: 'Mor Naaman',
      source: 'IEEE Computer Magazine, vol. 39(10), Oct 2006.',
      paperLink: 'http://infolab.stanford.edu/~mor/research/naamanComp06.pdf'
    },
    {
      year: '2006',
      title: 'Generating Summaries and Visualization for Large Collections of Geo-Referenced Photographs',
      author: 'Alexander Jaffe, Mor Naaman, Tamir Tassa, Marc Davis',
      source: 'MIR 2006',
      sourceLink: 'http://riemann.ist.psu.edu/mir2006/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/mir609-jaffe.pdf'
    },
    {
      year: '2006',
      title: 'HT06, Tagging Paper, Taxonomy, Flickr, Academic Article, ToRead',
      author: 'Cameron Marlow, Mor Naaman, danah boyd, Marc Davis',
      source: 'HYPERTEXT 2006',
      sourceLink: 'http://ht06.org/',
      paperLink: 'http://infolab.stanford.edu/~mor/research/MarlowHT06.pdf'
    },
    {
      year: '2005',
      title: 'Leveraging Geo-Referenced Digital Photographs',
      author: 'Mor Naaman',
      source: 'Ph.D. Thesis',
      paperLink: 'http://infolab.stanford.edu/~mor/research/chi241-ahern-mediaprivacy.pdf',
      extraInfo: 'For a shoter read: [Introduction Only](http://infolab.stanford.edu/~mor/research/naamanthesisintro.pdf)'
    },
    {
      year: '2005',
      title: 'Leveraging Context to Resolve Identity in Photo Albums',
      author: 'Mor Naaman, Ron B. Yeh, Hector Garcia-Molina, Andreas Paepcke',
      source: 'JCDL 2005',
      sourceLink: 'http://www.jcdl2005.org/',
      paperLink: 'http://dbpubs.stanford.edu/pub/2005-10'
    },
    {
      year: '2005',
      title: 'Assigning Textual Names to Sets of Geographic Coordinates',
      author: 'Mor Naaman, Yee Jiun Song, Andreas Paepcke, Hector Garcia-Molina',
      source: 'Journal of Computers, Environment, and Urban Systems Journal, 30(4):418-435, July 2006.',
      sourceLink: 'http://www.sciencedirect.com/science/journal/01989715',
      paperLink: 'http://dbpubs.stanford.edu/pub/2005-18'
    },
    {
      year: '2004',
      title: 'Context Data in Geo-Referenced Digital Photo Collections',
      author: 'Mor Naaman, Susumu Harada, QianYing Wang, Hector Garcia-Molina, Andreas Paepcke',
      source: 'ACM MM 2004',
      sourceLink: 'http://www.mm2004.org/',
      paperLink: 'http://dbpubs.stanford.edu/pub/2004-43'
    },
    {
      year: '2004',
      title: 'Adventures in Space and Time: Browsing Personal Collections of Geo-Referenced Digital Photographs',
      author: 'Mor Naaman, Susumu Harada, QianYing Wang, Andreas Paepcke',
      source: 'Stanford Technical Report',
      paperLink: 'http://dbpubs.stanford.edu/pub/2004-26'
    },
    {
      year: '2004',
      title: 'Automatic Organization for Digital Photographs with Geographic Coordinates',
      author: 'Mor Naaman, Yee Jiun Song, Andreas Paepcke, Hector Garcia-Molina',
      source: 'JCDL 2004',
      sourceLink: 'http://www.jcdl2004.org/',
      paperLink: 'http://dbpubs.stanford.edu/pub/2004-27',
      award: 'Vannevar Bush Best Paper Award'
    },
    {
      year: '2004',
      title: 'Lost in Memories: Interacting With Large Photo Collections on PDAs',
      author: 'Susumu Harada, Mor Naaman, Yee Jiun Song, QianYing Wang, Andreas Paepcke',
      source: 'JCDL 2004',
      sourceLink: 'http://www.jcdl2004.org/',
      paperLink: 'http://dbpubs.stanford.edu/pub/2004-31',
    },
    {
      year: '2003',
      title: 'From Where to What: Metadata Sharing for Digital Photographs with Geographic Coordinates',
      author: 'Mor Naaman, Andreas Paepcke, Hector Garcia-Molina',
      source: 'COOPIS 2003',
      sourceLink: 'http://www.cs.rmit.edu.au/fedconf/coopis/2003/',
      paperLink: 'http://dbpubs.stanford.edu/pub/2003-62'
    },
    {
      year: '2003',
      title: 'Evaluation of ESI and Class-Based Delta Encoding',
      author: 'Mor Naaman, Hector Garcia-Molina, Andreas Paepcke',
      source: 'IWCW 2003',
      sourceLink: 'http://2003.iwcw.org/',
      paperLink: 'http://dbpubs.stanford.edu/pub/2003-61'
    }
  ]
].map(function(n) {
  return n.map(function(m) {
    if (m.extraInfo) {
      m.extraInfo = marked(m.extraInfo);
    }
    return m;
  });
});

module.exports = {
  bio: bio,
  news: news,
  publications: publications
};
