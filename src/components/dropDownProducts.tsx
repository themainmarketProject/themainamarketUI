import React, {useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
// import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { ApolloError } from 'apollo-client';

// const GET_CATEGORIES = gql`
//   query {
//       categories{
//           id,
//           name,
//           subCategories{
//               name,
//               id
//         }
//     }
// }`;

interface Category {
  id: string;
  name: string;
  subCategories: [{ id: string; name: string }];
}

type Categories = {
  categories: Category[];
};

interface Cat {
  loading1: boolean;
  error1: ApolloError | undefined;
  data1: Categories;
}

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    padding: '1rem',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function DropDownProduct({ loading1, error1, data1 }: Cat) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
    if (error1) return <p>An error occured!</p>;


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <div
            aria-controls="customized-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className="header-bottom__product"
        >
            Products
        </div>
        <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <div className="flex_product">
            {data1?.categories.map((menu: Category) => {
                return (<>
                <div><strong>{menu.name}</strong>
                {menu?.subCategories.map((sub: any) => {
                    return (
                        <StyledMenuItem
                        // onClick={() => { window.location.pathname = menu.link }}
                        >
                        <ListItemText primary={sub["name"]}/>
                        </StyledMenuItem>
                    )
                })}
                </div>
            </>)})}
            </div>
        </StyledMenu>
        </div>
    );
}