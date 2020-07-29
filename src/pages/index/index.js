import '../../assets/favicons/favicons';

function requireAll(r) {
  return r.keys().map(r);
}

requireAll(require.context('../../', true, /\.js|scss$/));
