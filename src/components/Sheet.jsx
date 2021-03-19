import { useSelector, useDispatch } from 'react-redux';

import Box from '@material-ui/core/Box';

import ListIcon from '@material-ui/icons/List';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';

import SheetFab from 'components/SheetFab';
import OptionalFab from 'components/OptionalFab';
import Section from 'components/Section';
import SheetAddform from 'components/SheetAddform';
import Subheader from 'components/Subheader';
import ItemForm from 'components/ItemForm';

import { setOpen } from 'store/modules/sheetAddform';
import { createSection } from 'store/modules/sheet';
import { toggleModifyMode } from 'store/modules/mode';

function Sheet({ match }) {
  const dispatch = useDispatch();
  const { id } = match.params;
  const openItemForm = useSelector(state => state.mode.openItemForm);

  return (
    <>
      <Box>
        <Subheader id={id} />
        <Section />
      </Box>
      <SheetFab iconA={<ListIcon />} iconB={<CloseIcon />} />
      <OptionalFab bottom={11}>
        <AddIcon onClick={() => dispatch(setOpen())} />
      </OptionalFab>
      <OptionalFab bottom={20}>
        <CreateIcon onClick={() => dispatch(toggleModifyMode())} />
      </OptionalFab>
      <SheetAddform
        title="Add Section"
        handleSubmit={type => {
          dispatch(createSection(type));
        }}
      >
        Enter the name of your section.
      </SheetAddform>
      {openItemForm ? <ItemForm /> : null}
    </>
  );
}

export default Sheet;
