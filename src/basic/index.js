import '../favicons/safari-pinned-tab.svg';

function requireAll(r) {
  return r.keys().map(r);
}

requireAll(require.context('../', true, /\.js|scss$/));
