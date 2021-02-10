var metric;

metric = {
  ng: {
    name: {
      singular: 'Nanogram'
    , plural: 'Nanograms'
    }
  , to_anchor: 1/1000000000
  }
, ug: {
    name: {
      singular: 'Microgram'
    , plural: 'Micrograms'
    }
  , to_anchor: 1/1000000
  }
, mg: {
    name: {
      singular: 'Milligram'
    , plural: 'Milligrams'
    }
  , to_anchor: 1/1000
  }
, g: {
    name: {
      singular: 'Gram'
    , plural: 'Grams'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, _anchors: {
    metric: {
      unit: 'g'
    , ratio: 1
    }
  }
};

