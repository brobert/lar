
import Alerts from 'components/Elements/Alert/Alerts';
import Buttons from 'components/Elements/Button/Buttons';
import Colors from 'components/Elements/Color/Colors';
import Dashboard from './components/Dashboard/Dashboard';
import Dropdowns from 'components/Elements/Dropdown/Dropdowns';
import Typographys from 'components/Elements/Typographys/Typographys';
import Navs from 'components/Elements/Navs/Navs';
import Modals from 'components/Elements/Modal/Modals';
import Fontawesome from 'components/Fontawesome/Fontawesome';
import Switchs from './components/Elements/Switchs/Switchs';
import Lists from './components/Elements/Lists/Lists';
import Ratings from './components/Elements/Ratings/Ratings';
import Nicescroll from './components/Elements/Nicescroll/nicescroll';
import Tabss from './components/Elements/Tabs/Tabss';
import Progressbar from './components/Elements/Progress/Progressbar';
import PopoverTooltips from './components/Elements/Popover_Tooltips/Popover_Tooltips';
import DatePickers from './components/Elements/Datepicker/Datepickers';
import Mapss from './components/Maps/Maps';
import Accordions from './components/Elements/Accordion/Accordions';
import Chartjs from './components/Chart/Chartjs';
import Datatables from './components/Tables/Datatables/Datatables';
import Tables from './components/Tables/Tables/Tables';
import Forminputs from './components/Forms/Forminput/Forminputs';
import Formvalidations from './components/Forms/Formvalidation/Formvalidations';
import Errors from './components/Custompage/Error/Errors';
import Formgroups from './components/Forms/Inputgroup/Inputgroups';
import Eventcalendar from './components/Calendar/Eventcalendar';
import Blankpage from './components/Custompage/Blankpage/Blankpage';
import Faq from './components/Custompage/Faq/Faq';
import Contacts from './components/Custompage/Contacts/Contacts';
import Invoice from './components/Custompage/Invoice/Invoice';

import Widgets from './components/Widgets/Widgets';
import Chat from './components/Chat/Chat';
import Mail from './components/MailBox/Mailbox';

const mapPath2Components = {
    'accordion': Accordions,
    'alerts': Alerts,
    'blankpage': Blankpage,
    'buttons': Buttons,
    'chartjs': Chartjs,
    'chat': Chat,
    'colors': Colors,
    'contacts': Contacts,
    'dashboard': Dashboard,
    'datatable': Datatables,
    'datepicker': DatePickers,
    'dropdown': Dropdowns,
    'error': Errors,
    'eventcalendar': Eventcalendar,
    'faq': Faq,
    'fontawesome': Fontawesome,
    'form/input': Forminputs,
    'form/validation': Formvalidations,
    'invoice': Invoice,
    'lists': Lists,
    'mailbox': Mail,
    'maps': Mapss,
    'inputgroup': Formgroups, 
    'modal': Modals,
    'navs': Navs,
    'nicescroll': Nicescroll,
    'popover_tooltips': PopoverTooltips,
    'progess': Progressbar,
    'ratings': Ratings,
    'switchs': Switchs,
    'tables': Tables,
    'tabs': Tabss,
    'typographys': Typographys,
    'widget': Widgets,
};

export default mapPath2Components;
