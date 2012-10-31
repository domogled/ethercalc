(function(){
  this.include = function(){
    var env, json, ref$, this$ = this;
    try {
      env = process.env;
      this.io.configure(function(){
        return this$.io.set('transports', this$.KEY || this$.POLLING
          ? ['jsonp-polling']
          : env.SUBDOMAIN && env.NODE_ENV
            ? ['websocket', 'xhr-polling', 'jsonp-polling']
            : ['websocket', 'flashsocket', 'xhr-polling', 'jsonp-polling']);
      });
      json = require('fs').readFileSync('/home/dotcloud/environment.json', 'utf8');
      return ref$ = JSON.parse(json), env.REDIS_HOST = ref$.DOTCLOUD_DATA_REDIS_HOST, env.REDIS_PORT = ref$.DOTCLOUD_DATA_REDIS_PORT, env.REDIS_PASS = ref$.DOTCLOUD_DATA_REDIS_PASSWORD, ref$;
    } catch (e$) {}
  };
}).call(this);
