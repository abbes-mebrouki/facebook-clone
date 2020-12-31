import { createMuiTheme } from "@material-ui/core/styles";
import { darkTheme } from "./styles/global-styles";


const muiPalette = {
	primary: {
		main: darkTheme.primaryBlueColor,
	},
	secondary: {
		main: darkTheme.commonColor,
	},
	
}


const muiOverrides = {
	MuiButton: {
		root: {
			textTransform: "none",
			borderRadius: 6,
			fontWeight: 450,
		},
	},
	MuiTypography:{
		root:{
			margin: "10px 10px 0 10px"
		}
	},
	MuiTextField:{
		root:{
			margin: 10,
		}
	},

	MuiCheckbox:{
		root:{
		},
		MuiIconButton:{
			borderRadius: 6
		}
	},
	
}




const muiProps = {
	MuiButton: {
		disableRipple: true,
		variant: "contained",
		
	},
	MuiCheckbox: {
		disableRipple: true,
	},
	MuiTextField: {
		variant: 'outlined',
		size: 'small',
		InputLabelProps:{
			shrink: true
		}
		
	},
	MuiBadge:{
		overlap: 'circle',
		
	}
}




const MuiCustomTheme = createMuiTheme({
	shadows: ["none"],
	palette: {...muiPalette},
	overrides: {...muiOverrides},
	props: {...muiProps},
});


export default MuiCustomTheme

