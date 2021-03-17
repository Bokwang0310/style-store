import { useDispatch } from 'react-redux';

import Box from '@material-ui/core/Box';

import ListIcon from '@material-ui/icons/List';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import SearchIcon from '@material-ui/icons/Search';

import SheetFab from 'components/SheetFab';
import OptionalFab from 'components/OptionalFab';
import Section from 'components/Section';
import SheetAddform from 'components/SheetAddform';
import Subheader from 'components/Subheader';

import { createSection } from 'store/modules/sheet';

function Sheet({ match, setOpen }) {
  const dispatch = useDispatch();
  const { id } = match.params;

  return (
    <>
      <Box>
        <Subheader title="My Title" />
        <Section />
      </Box>
      <SheetFab iconA={<ListIcon />} iconB={<CloseIcon />} />
      <OptionalFab bottom={11}>
        <AddIcon onClick={() => dispatch(setOpen())} />
      </OptionalFab>
      <OptionalFab bottom={20}>
        <ShareIcon />
      </OptionalFab>
      <OptionalFab bottom={29}>
        <SearchIcon />
      </OptionalFab>
      <SheetAddform
        title="Add Section"
        handleSubmit={title => {
          dispatch(createSection(title));
        }}
      >
        Enter the name of your section.
      </SheetAddform>
    </>
  );
}

export default Sheet;
