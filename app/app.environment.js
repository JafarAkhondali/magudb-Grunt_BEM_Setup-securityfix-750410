angular.module('app.environment', [])

.constant('package', {name:'Grunt_BEM_Setup',version:'1.0.0',description:'',main:'index.html',scripts:{test:'npm test'},author:'Magnus Udbjørg <mud@codehouse.com>',license:'ISC',devDependencies:{grunt:'^0.4.5','grunt-angular-templates':'^0.5.7','grunt-config-dir':'^0.3.2','grunt-contrib-less':'^1.0.0','grunt-contrib-uglify':'^0.8.0','grunt-ng-annotate':'^0.10.0','grunt-ng-constant':'^1.1.0','less-plugin-autoprefix':'^1.3.0','time-grunt':'^1.1.0'}})

.constant('ENV', {key1:123,key2:'value2',foobar:false})

.value('version', '1.0.0.0')

.value('debug', true)

;