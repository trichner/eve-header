
Express middleware to parse EVE Online in-game-browser HTTP headers.

## Usage Example

```
var eveHeader = require('eve-header');
app.use(eveHeader);


app.get('/',function(req, res, next){
    var pilot = req.eve.char.name;
    res.send('Capsuleer ' + pilot + ' just docked :)');
});
```

## Headers

| Eve Header | req path |
|-----|-----|
|'eve_trusted' | 'trusted',|
|'eve_serverip' | 'server.ip',|
|'eve_charname' | 'char.name',|
|'eve_charid' | 'char.id',|
|'eve_corpname' | 'corp.name',|
|'eve_corpid' | 'corp.id',|
|'eve_alliancename' | 'alliance.name',|
|'eve_allianceid' | 'alliance.id',|
|'eve_regionname' | 'region.name',|
|'eve_constellationname' | 'constellation.name',|
|'eve_solarsystemname' | 'solarsystem.name',|
|'eve_stationname' | 'station.name',|
|'eve_stationid' | 'station.id',|
|'eve_corprole' | 'corp.role',|
|'eve_solarsystemid' | 'solarsystem.id',|
|'eve_warfactionid' | 'warfaction.id',|
|'eve_shipid' | 'ship.id',|
|'eve_shipname' | 'ship.name',|
|'eve_shiptypeid' | 'ship.type.id',|
|'eve_shiptypename' | 'ship.type.name' |

Documented here https://wiki.eveonline.com/en/wiki/IGB_Headers and here http://wiki.eveuniversity.org/In_Game_Browser_Development

## Good to know
- an nginx proxy will filter the headers by default, fix here: http://nginx.org/en/docs/http/ngx_http_core_module.html#underscores_in_headers
