import React from 'react';
import ColorPicker from 'material-ui-color-picker'
import Grid from '@material-ui/core/Grid';


export default function SettingsPage() {
  const sm_width = 6, md_width = 4, lg_width = 2;
  
  return (
      <Grid container spacing={1} lg={12} align="center" alignItems="center" alignContent="center">
        <Grid item sm={sm_width} md={md_width} lg={lg_width} xs={sm_width}>
          <ColorPicker
            name='bg_color'
            defaultValue='#fff'
            label="Background"
            // value={this.state.color} - for controlled component
            onChange={color => console.log(color)}
          />
        </Grid>
        <Grid item sm={sm_width} md={md_width} lg={lg_width} xs={sm_width}>
          <ColorPicker
            name='accent_color'
            defaultValue='#d35401'
            label="Accent"
            // value={this.state.color} - for controlled component
            onChange={color => console.log(color)}
          />
        </Grid>
        <Grid item sm={sm_width} md={md_width} lg={lg_width} xs={sm_width}>
          <ColorPicker
            name='accent_color'
            defaultValue='#d35401'
            label="Accent"
            // value={this.state.color} - for controlled component
            onChange={color => console.log(color)}
          />
        </Grid>
        <Grid item sm={sm_width} md={md_width} lg={lg_width} xs={sm_width}>
          <ColorPicker
            name='accent_color'
            defaultValue='#d35401'
            label="Accent"
            // value={this.state.color} - for controlled component
            onChange={color => console.log(color)}
          />
        </Grid>
        <Grid item sm={sm_width} md={md_width} lg={lg_width} xs={sm_width}>
          <ColorPicker
            name='accent_color'
            defaultValue='#d35401'
            label="Accent"
            // value={this.state.color} - for controlled component
            onChange={color => console.log(color)}
          />
        </Grid>
      </Grid>
  );
}
