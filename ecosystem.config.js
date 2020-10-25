module.exports = {
  apps: [
    {
      'name': 'demo-api',
      'script': 'npm',
      'args': "run start",
      'node_args': '--experimental-json-modules',
      'exec_mode': 'cluster_mode',
      'instances': '1',
      'watch': false
    }
  ]
};
