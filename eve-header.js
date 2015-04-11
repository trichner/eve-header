var eve_headers = {
  'eve_trusted' : 'trusted',
  'eve_serverip' : 'server.ip',

  'eve_charname' : 'char.name',
  'eve_charid' : 'char.id',

  'eve_corpname' : 'corp.name',
  'eve_corpid' : 'corp.id',
  'eve_corprole' : 'corp.role',
  'eve_alliancename' : 'alliance.name',
  'eve_allianceid' : 'alliance.id',

  'eve_regionname' : 'region.name',
  'eve_constellationname' : 'constellation.name',
  'eve_solarsystemname' : 'solarsystem.name',
  'eve_solarsystemid' : 'solarsystem.id',
  'eve_stationname' : 'station.name',
  'eve_stationid' : 'station.id',
  'eve_warfactionid' : 'warfaction.id',

  'eve_shipid' : 'ship.id',
  'eve_shipname' : 'ship.name',
  'eve_shiptypeid' : 'ship.type.id',
  'eve_shiptypename' : 'ship.type.name'
}

module.exports = function(req, res, next) {
  req.eve = {};
  for (var key in eve_headers) {
    if (eve_headers.hasOwnProperty(key)) {
      setPath(req.eve,eve_headers[key],req.get(key));
    }
  }
  next();
};

function setPath(obj,path,value){
  path = path.split('.');
  if(path.length==0){
    return;
  }
  var node = obj;
  var branch = path.shift();
  while(path.length>0){
    node[branch] = node[branch] || {};
    node = node[branch];
    branch = path.shift();
  }
  node[branch] = value;
  return obj;
}
