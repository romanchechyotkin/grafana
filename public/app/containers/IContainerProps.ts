﻿import { SearchStore } from './../stores/SearchStore/SearchStore';
import { ServerStatsStore } from './../stores/ServerStatsStore/ServerStatsStore';
import { NavStore } from './../stores/NavStore/NavStore';
import { AlertListStore } from './../stores/AlertListStore/AlertListStore';
import { ViewStore } from './../stores/ViewStore/ViewStore';
import { FolderStore } from './../stores/FolderStore/FolderStore';

interface IContainerProps {
  search: typeof SearchStore.Type;
  serverStats: typeof ServerStatsStore.Type;
  nav: typeof NavStore.Type;
  alertList: typeof AlertListStore.Type;
  view: typeof ViewStore.Type;
  folder: typeof FolderStore.Type;
}

export default IContainerProps;
