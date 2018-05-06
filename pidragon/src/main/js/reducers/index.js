import {combineReducers} from 'redux';
import appPrefs from '../core/common/apppref-reducer';
import appMenus from '../core/common/appmenu-reducer';
import member from '../member/member-reducer';
import session from '../member/session/session-reducer';
import status from '../core/status/status-reducer';
import users from '../admin/users/users-reducer';
import languages from '../admin/language/language-reducer';
import roles from '../admin/roles/roles-reducer';
import permissions from '../admin/permissions/permissions-reducer';
import menus from '../admin/menu/menus-reducer';
import category from '../admin/category/category-reducer';
import services from '../admin/service/service-reducer';

const rootReducer = combineReducers({appPrefs,appMenus,session,member,status,
  users,languages,roles,permissions,menus,category,services});

export default rootReducer;
