import {app} from './app'

interface ISettings {
  connectionString: string;
}

var settingsInstance = {
  production: {} as ISettings,
  development: {
    connectionString: "mongodb://root:root@52.197.162.5/node_quick_start"
  } as ISettings
};

export default (settingsInstance as any)[app.env] as ISettings;
