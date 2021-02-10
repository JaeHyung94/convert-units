var metric;

metric = {
  nl: {
    name: {
      singular: 'Nanoliter'
    , plural: 'Nanoliters'
    }
  , to_anchor: 1/1000000000
}
,  ul: {
    name: {
      singular: 'Microliter'
    , plural: 'Microliters'
    }
  , to_anchor: 1/1000000
}
,  ml: {
    name: {
      singular: 'Millilitre'
    , plural: 'Millilitres'
    }
  , to_anchor: 1/1000
  }
, l: {
    name: {
      singular: 'Litre'
    , plural: 'Litres'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, _anchors: {
    metric: {
      unit: 'l'
    , ratio: 1
    }
  }
};

