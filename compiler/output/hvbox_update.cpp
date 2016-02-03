
#include <cstdio>
#include "generated.h"
#include "visits.h"
//@type action
int hbox_width ( int _ale_arg3,  bool _ale_arg1,  bool _ale_arg0,  int _ale_arg2) { return ((_ale_arg0)) ? ( (((_ale_arg1)) ? ( (_ale_arg2) ) : ( (0) )) ) : ( (_ale_arg3) ); }
//@type action
bool hbox_childs_bottom_delta_0 ( bool _ale_arg0) { return _ale_arg0; }
//@type action
bool hbox_childsHeight_delta ( int _ale_arg0,  int _ale_arg1) { return (_ale_arg0) != (_ale_arg1); }
//@type action
int hbox_childs_bottom ( int _ale_arg2,  bool _ale_arg0,  int _ale_arg1) { return ((_ale_arg0)) ? ( (_ale_arg1) ) : ( (_ale_arg2) ); }
//@type action
int hbox_height ( bool _ale_arg1,  int _ale_arg2,  bool _ale_arg0,  int _ale_arg3) { return ((_ale_arg0)) ? ( (((_ale_arg1)) ? ( (_ale_arg2) ) : ( (0) )) ) : ( (_ale_arg3) ); }
//@type action
bool hbox_childs_bottom_delta ( int _ale_arg1,  int _ale_arg0) { return (_ale_arg0) != (_ale_arg1); }
//@type action
bool hbox_height_delta_0 ( bool _ale_arg1,  bool _ale_arg0) { return ((_ale_arg0) || (_ale_arg1)); }
//@type action
bool hbox_height_delta ( int _ale_arg0,  int _ale_arg1) { return (_ale_arg0) != (_ale_arg1); }
//@type action
bool hbox_width_delta_0 ( bool _ale_arg1,  bool _ale_arg0) { return ((_ale_arg0) || (_ale_arg1)); }
//@type action
bool hbox_width_delta ( int _ale_arg1,  int _ale_arg0) { return (_ale_arg0) != (_ale_arg1); }
//@type action
bool hbox_childsWidth_delta ( int _ale_arg0,  int _ale_arg1) { return (_ale_arg0) != (_ale_arg1); }
//@type action
bool vbox_height_delta ( int _ale_arg0,  int _ale_arg1) { return (_ale_arg0) != (_ale_arg1); }
//@type action
bool vbox_childs_right_delta ( int _ale_arg0,  int _ale_arg1) { return (_ale_arg0) != (_ale_arg1); }
//@type action
bool vbox_width_delta_0 ( bool _ale_arg1,  bool _ale_arg0) { return ((_ale_arg0) || (_ale_arg1)); }
//@type action
bool vbox_childs_right_delta_0 ( bool _ale_arg0) { return _ale_arg0; }
//@type action
int vbox_height ( bool _ale_arg1,  int _ale_arg2,  bool _ale_arg0,  int _ale_arg3) { return ((_ale_arg0)) ? ( (((_ale_arg1)) ? ( (_ale_arg2) ) : ( (0) )) ) : ( (_ale_arg3) ); }
//@type action
bool vbox_childsHeight_delta ( int _ale_arg0,  int _ale_arg1) { return (_ale_arg0) != (_ale_arg1); }
//@type action
bool vbox_height_delta_0 ( bool _ale_arg1,  bool _ale_arg0) { return ((_ale_arg0) || (_ale_arg1)); }
//@type action
int vbox_childs_right ( int _ale_arg2,  int _ale_arg1,  bool _ale_arg0) { return ((_ale_arg0)) ? ( (_ale_arg1) ) : ( (_ale_arg2) ); }
//@type action
int vbox_width ( int _ale_arg3,  bool _ale_arg1,  bool _ale_arg0,  int _ale_arg2) { return ((_ale_arg0)) ? ( (((_ale_arg1)) ? ( (_ale_arg2) ) : ( (0) )) ) : ( (_ale_arg3) ); }
//@type action
bool vbox_width_delta ( int _ale_arg1,  int _ale_arg0) { return (_ale_arg0) != (_ale_arg1); }
//@type action
bool vbox_childsWidth_delta ( int _ale_arg0,  int _ale_arg1) { return (_ale_arg0) != (_ale_arg1); }
//@type action
bool root_root_right_delta_0 ( bool _ale_arg0) { return _ale_arg0; }
//@type action
bool root_root_right_delta ( int _ale_arg1,  int _ale_arg0) { return (_ale_arg0) != (_ale_arg1); }
//@type action
bool root_root_bottom_delta_0 ( bool _ale_arg0) { return _ale_arg0; }
//@type action
int root_root_right ( int _ale_arg1,  bool _ale_arg0,  int _ale_arg2) { return ((_ale_arg0)) ? ( (_ale_arg1) ) : ( (_ale_arg2) ); }
//@type action
int root_root_bottom ( int _ale_arg1,  int _ale_arg2,  bool _ale_arg0) { return ((_ale_arg0)) ? ( (_ale_arg1) ) : ( (_ale_arg2) ); }
//@type action
bool root_root_bottom_delta ( int _ale_arg0,  int _ale_arg1) { return (_ale_arg0) != (_ale_arg1); }
//@type action
bool leaf_width_delta_0 ( bool _ale_arg0) { return _ale_arg0; }
//@type action
int leaf_height ( int _ale_arg1,  bool _ale_arg0,  int _ale_arg2) { return ((_ale_arg0)) ? ( (_ale_arg1) ) : ( (_ale_arg2) ); }
//@type action
bool leaf_height_delta ( int _ale_arg0,  int _ale_arg1) { return (_ale_arg0) != (_ale_arg1); }
//@type action
bool leaf_height_delta_0 ( bool _ale_arg0) { return _ale_arg0; }
//@type action
int leaf_width ( int _ale_arg2,  bool _ale_arg0,  int _ale_arg1) { return ((_ale_arg0)) ? ( (_ale_arg1) ) : ( (_ale_arg2) ); }
//@type action
bool leaf_width_delta ( int _ale_arg1,  int _ale_arg0) { return (_ale_arg0) != (_ale_arg1); }
 void visit_hbox_0_update(HBox* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  HBox %s\n", "0");

{
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
    old_child = child;
  }
}

 
 }
 void visit_hbox_1_update(HBox* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  HBox %s\n", "1");

{
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
    old_child = child;
  }
}


  self->childsheight_delta_0_init = (((false)));
  self->childsheight_delta_0 = (self->childsheight_delta_0_init);
  printf("FTL:       init childsHeight_delta_0 %s\n", to_string(self->childsheight_delta_0_init));
  printf("FTL:     last init childsheight_delta_0 %s\n", to_string(self->childsheight_delta));
    self->childswidth_delta_0_init = (((false)));
  self->childswidth_delta_0 = (self->childswidth_delta_0_init);
  printf("FTL:       init childsWidth_delta_0 %s\n", to_string(self->childswidth_delta_0_init));
  printf("FTL:     last init childswidth_delta_0 %s\n", to_string(self->childswidth_delta));
  {
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
      self->childsheight_delta_0 = (((((self->childsheight_delta) || (((child->height_delta) || (child->height_delta)))))));
      printf("FTL:          step childsHeight_delta_0 %s\n", to_string(self->childsheight_delta));
      self->childswidth_delta_0 = (((((self->childswidth_delta) || (child->width_delta)))));
      printf("FTL:          step childsWidth_delta_0 %s\n", to_string(self->childswidth_delta));
    old_child = child;
  }
}


  self->childsheight_init = (((((self->childsheight_delta)) ? ( (0) ) : ( (self->childsheight) ))));
  
  int childsheight_old = self->childsheight;
  self->childsheight = (self->childsheight_init);
  printf("FTL:       init childsHeight %s\n", to_string(self->childsheight_init));
  printf("FTL:     last init childsheight %s\n", to_string(self->childsheight));
    self->childswidth_init = (((((self->childswidth_delta)) ? ( (0) ) : ( (self->childswidth) ))));
  
  int childswidth_old = self->childswidth;
  self->childswidth = (self->childswidth_init);
  printf("FTL:       init childsWidth %s\n", to_string(self->childswidth_init));
  printf("FTL:     last init childswidth %s\n", to_string(self->childswidth));
  {
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
      
      int childsheight_old = self->childsheight;
      self->childsheight = (((((self->childsheight_delta)) ? ( ((((self->childsheight) > (child->height))) ? ( (self->childsheight) ) : ( (child->height) )) ) : ( (self->childsheight) ))));
      printf("FTL:          step childsHeight %s\n", to_string(self->childsheight));
      
      int childswidth_old = self->childswidth;
      self->childswidth = (((((self->childswidth_delta)) ? ( ((self->childswidth) + (child->width)) ) : ( (self->childswidth) ))));
      printf("FTL:          step childsWidth %s\n", to_string(self->childswidth));
    old_child = child;
  }
}

  self->childsheight_delta = (hbox_childsHeight_delta(self->childsheight, childsheight_old));
  printf("FTL:     hbox_childsHeight_delta %s\n", to_string(self->childsheight_delta));
  printf("FTL:         childsHeight %s\n", to_string(self->childsheight));
  printf("FTL:         childsHeight_old_0 %s\n", to_string(childsheight_old));
  self->childswidth_delta = (hbox_childsWidth_delta(self->childswidth, childswidth_old));
  printf("FTL:     hbox_childsWidth_delta %s\n", to_string(self->childswidth_delta));
  printf("FTL:         childsWidth %s\n", to_string(self->childswidth));
  printf("FTL:         childsWidth_old_0 %s\n", to_string(childswidth_old));
  self->base.height_delta_0 = (hbox_height_delta_0(self->childsheight_delta, self->base.visible_delta));
  printf("FTL:     hbox_height_delta_0 %s\n", to_string(self->base.height_delta));
  printf("FTL:         childsHeight_delta %s\n", to_string(self->childsheight_delta));
  printf("FTL:         visible_delta %s\n", to_string(self->base.visible_delta));
  self->base.width_delta_0 = (hbox_width_delta_0(self->childswidth_delta, self->base.visible_delta));
  printf("FTL:     hbox_width_delta_0 %s\n", to_string(self->base.width_delta));
  printf("FTL:         childsWidth_delta %s\n", to_string(self->childswidth_delta));
  printf("FTL:         visible_delta %s\n", to_string(self->base.visible_delta));
  
      int height_old = self->base.height;
      self->base.height = (hbox_height(self->base.visible, self->childsheight, self->base.height_delta, height_old));
  printf("FTL:     hbox_height %s\n", to_string(self->base.height));
  printf("FTL:         visible %s\n", to_string(self->base.visible));
  printf("FTL:         childsHeight %s\n", to_string(self->childsheight));
  printf("FTL:         height_delta_0 %s\n", to_string(self->base.height_delta));
  printf("FTL:         height_old_0 %s\n", to_string(height_old));
  
      int width_old = self->base.width;
      self->base.width = (hbox_width(width_old, self->base.visible, self->base.width_delta, self->childswidth));
  printf("FTL:     hbox_width %s\n", to_string(self->base.width));
  printf("FTL:         width_old_0 %s\n", to_string(width_old));
  printf("FTL:         visible %s\n", to_string(self->base.visible));
  printf("FTL:         width_delta_0 %s\n", to_string(self->base.width_delta));
  printf("FTL:         childsWidth %s\n", to_string(self->childswidth));
  self->base.height_delta = (hbox_height_delta(self->base.height, height_old));
  printf("FTL:     hbox_height_delta %s\n", to_string(self->base.height_delta));
  printf("FTL:         height %s\n", to_string(self->base.height));
  printf("FTL:         height_old_0 %s\n", to_string(height_old));
  self->base.width_delta = (hbox_width_delta(width_old, self->base.width));
  printf("FTL:     hbox_width_delta %s\n", to_string(self->base.width_delta));
  printf("FTL:         width_old_0 %s\n", to_string(width_old));
  printf("FTL:         width %s\n", to_string(self->base.width));
 
 }
 void visit_hbox_2_update(HBox* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  HBox %s\n", "2");

{
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
      child->bottom_delta_0 = ((self->base.bottom_delta ));
      printf("FTL:          step childs@bottom_delta_0 %s\n", to_string(child->bottom_delta_0));
      
      int bottom_old = child->bottom;
      child->bottom = ((((child->bottom_delta_0)) ? ( (self->base.bottom) ) : ( (bottom_old) )));
      printf("FTL:          step childs@bottom %s\n", to_string(child->bottom));
    old_child = child;
  }
}


{
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
      child->bottom_delta = (((child->bottom) != (bottom_old)));
      printf("FTL:          step childs@bottom_delta %s\n", to_string(child->bottom_delta));
    old_child = child;
  }
}


  self->childs_right_delta_0_init = (((self->base.right_delta)));
  self->childs_right_delta_0_last = (self->childs_right_delta_0_init);
  printf("FTL:       init childs@right_delta_0 %s\n", to_string(self->childs_right_delta_0_init));
  printf("FTL:     last init childs_right_delta_0_last %s\n", to_string(self->childs_right_delta_0_last));
    self->childs_right_init = (((self->base.right)));
  self->childs_right_last = (self->childs_right_init);
  printf("FTL:       init childs@right %s\n", to_string(self->childs_right_init));
  printf("FTL:     last init childs_right_last %s\n", to_string(self->childs_right_last));
    self->childs_right_delta_init = (((0)));
  self->childs_right_delta_last = (self->childs_right_delta_init);
  printf("FTL:       init childs@right_delta %s\n", to_string(self->childs_right_delta_init));
  printf("FTL:     last init childs_right_delta_last %s\n", to_string(self->childs_right_delta_last));
  {
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
      child->right_delta_0 = (((((((i == 0) ? ( self->childs_right_delta_init ) : (  old_child->right_delta ))) || (child->width_delta)))));
      printf("FTL:          step childs@right_delta_0 %s\n", to_string(child->right_delta_0));
      
      int right_old = child->right;
      child->right = (((((child->right_delta_0)) ? ( ((((i == 0) ? ( self->childs_right_init ) : (  old_child->right ))) + (child->width)) ) : ( (right_old) ))));
      printf("FTL:          step childs@right %s\n", to_string(child->right));
      child->right_delta = ((((child->right) != (right_old))));
      printf("FTL:          step childs@right_delta %s\n", to_string(child->right_delta));
    old_child = child;
  }
}

 
 }
 void visit_vbox_0_update(VBox* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  VBox %s\n", "0");

{
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
    old_child = child;
  }
}

 
 }
 void visit_vbox_1_update(VBox* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  VBox %s\n", "1");

{
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
    old_child = child;
  }
}


  self->childsheight_delta_0_init = (((false)));
  self->childsheight_delta_0 = (self->childsheight_delta_0_init);
  printf("FTL:       init childsHeight_delta_0 %s\n", to_string(self->childsheight_delta_0_init));
  printf("FTL:     last init childsheight_delta_0 %s\n", to_string(self->childsheight_delta));
    self->childswidth_delta_0_init = (((false)));
  self->childswidth_delta_0 = (self->childswidth_delta_0_init);
  printf("FTL:       init childsWidth_delta_0 %s\n", to_string(self->childswidth_delta_0_init));
  printf("FTL:     last init childswidth_delta_0 %s\n", to_string(self->childswidth_delta));
  {
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
      self->childsheight_delta_0 = (((((self->childsheight_delta) || (child->height_delta)))));
      printf("FTL:          step childsHeight_delta_0 %s\n", to_string(self->childsheight_delta));
      self->childswidth_delta_0 = (((((self->childswidth_delta) || (((child->width_delta) || (child->width_delta)))))));
      printf("FTL:          step childsWidth_delta_0 %s\n", to_string(self->childswidth_delta));
    old_child = child;
  }
}


  self->childsheight_init = (((((self->childsheight_delta)) ? ( (0) ) : ( (self->childsheight) ))));
  
  int childsheight_old = self->childsheight;
  self->childsheight = (self->childsheight_init);
  printf("FTL:       init childsHeight %s\n", to_string(self->childsheight_init));
  printf("FTL:     last init childsheight %s\n", to_string(self->childsheight));
    self->childswidth_init = (((((self->childswidth_delta)) ? ( (0) ) : ( (self->childswidth) ))));
  
  int childswidth_old = self->childswidth;
  self->childswidth = (self->childswidth_init);
  printf("FTL:       init childsWidth %s\n", to_string(self->childswidth_init));
  printf("FTL:     last init childswidth %s\n", to_string(self->childswidth));
  {
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
      
      int childsheight_old = self->childsheight;
      self->childsheight = (((((self->childsheight_delta)) ? ( ((self->childsheight) + (child->height)) ) : ( (self->childsheight) ))));
      printf("FTL:          step childsHeight %s\n", to_string(self->childsheight));
      
      int childswidth_old = self->childswidth;
      self->childswidth = (((((self->childswidth_delta)) ? ( ((((self->childswidth) > (child->width))) ? ( (self->childswidth) ) : ( (child->width) )) ) : ( (self->childswidth) ))));
      printf("FTL:          step childsWidth %s\n", to_string(self->childswidth));
    old_child = child;
  }
}

  self->childsheight_delta = (vbox_childsHeight_delta(self->childsheight, childsheight_old));
  printf("FTL:     vbox_childsHeight_delta %s\n", to_string(self->childsheight_delta));
  printf("FTL:         childsHeight %s\n", to_string(self->childsheight));
  printf("FTL:         childsHeight_old_0 %s\n", to_string(childsheight_old));
  self->childswidth_delta = (vbox_childsWidth_delta(self->childswidth, childswidth_old));
  printf("FTL:     vbox_childsWidth_delta %s\n", to_string(self->childswidth_delta));
  printf("FTL:         childsWidth %s\n", to_string(self->childswidth));
  printf("FTL:         childsWidth_old_0 %s\n", to_string(childswidth_old));
  self->base.height_delta_0 = (vbox_height_delta_0(self->childsheight_delta, self->base.visible_delta));
  printf("FTL:     vbox_height_delta_0 %s\n", to_string(self->base.height_delta));
  printf("FTL:         childsHeight_delta %s\n", to_string(self->childsheight_delta));
  printf("FTL:         visible_delta %s\n", to_string(self->base.visible_delta));
  self->base.width_delta_0 = (vbox_width_delta_0(self->childswidth_delta, self->base.visible_delta));
  printf("FTL:     vbox_width_delta_0 %s\n", to_string(self->base.width_delta));
  printf("FTL:         childsWidth_delta %s\n", to_string(self->childswidth_delta));
  printf("FTL:         visible_delta %s\n", to_string(self->base.visible_delta));
  
      int height_old = self->base.height;
      self->base.height = (vbox_height(self->base.visible, self->childsheight, self->base.height_delta, height_old));
  printf("FTL:     vbox_height %s\n", to_string(self->base.height));
  printf("FTL:         visible %s\n", to_string(self->base.visible));
  printf("FTL:         childsHeight %s\n", to_string(self->childsheight));
  printf("FTL:         height_delta_0 %s\n", to_string(self->base.height_delta));
  printf("FTL:         height_old_0 %s\n", to_string(height_old));
  
      int width_old = self->base.width;
      self->base.width = (vbox_width(width_old, self->base.visible, self->base.width_delta, self->childswidth));
  printf("FTL:     vbox_width %s\n", to_string(self->base.width));
  printf("FTL:         width_old_0 %s\n", to_string(width_old));
  printf("FTL:         visible %s\n", to_string(self->base.visible));
  printf("FTL:         width_delta_0 %s\n", to_string(self->base.width_delta));
  printf("FTL:         childsWidth %s\n", to_string(self->childswidth));
  self->base.height_delta = (vbox_height_delta(self->base.height, height_old));
  printf("FTL:     vbox_height_delta %s\n", to_string(self->base.height_delta));
  printf("FTL:         height %s\n", to_string(self->base.height));
  printf("FTL:         height_old_0 %s\n", to_string(height_old));
  self->base.width_delta = (vbox_width_delta(width_old, self->base.width));
  printf("FTL:     vbox_width_delta %s\n", to_string(self->base.width_delta));
  printf("FTL:         width_old_0 %s\n", to_string(width_old));
  printf("FTL:         width %s\n", to_string(self->base.width));
 
 }
 void visit_vbox_2_update(VBox* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  VBox %s\n", "2");

{
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
      child->right_delta_0 = ((self->base.right_delta ));
      printf("FTL:          step childs@right_delta_0 %s\n", to_string(child->right_delta_0));
      
      int right_old = child->right;
      child->right = ((((child->right_delta_0)) ? ( (self->base.right) ) : ( (right_old) )));
      printf("FTL:          step childs@right %s\n", to_string(child->right));
    old_child = child;
  }
}


{
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
      child->right_delta = (((child->right) != (right_old)));
      printf("FTL:          step childs@right_delta %s\n", to_string(child->right_delta));
    old_child = child;
  }
}


  self->childs_bottom_delta_0_init = (((self->base.bottom_delta)));
  self->childs_bottom_delta_0_last = (self->childs_bottom_delta_0_init);
  printf("FTL:       init childs@bottom_delta_0 %s\n", to_string(self->childs_bottom_delta_0_init));
  printf("FTL:     last init childs_bottom_delta_0_last %s\n", to_string(self->childs_bottom_delta_0_last));
    self->childs_bottom_init = (((self->base.bottom)));
  self->childs_bottom_last = (self->childs_bottom_init);
  printf("FTL:       init childs@bottom %s\n", to_string(self->childs_bottom_init));
  printf("FTL:     last init childs_bottom_last %s\n", to_string(self->childs_bottom_last));
    self->childs_bottom_delta_init = (((0)));
  self->childs_bottom_delta_last = (self->childs_bottom_delta_init);
  printf("FTL:       init childs@bottom_delta %s\n", to_string(self->childs_bottom_delta_init));
  printf("FTL:     last init childs_bottom_delta_last %s\n", to_string(self->childs_bottom_delta_last));
  {
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
      child->bottom_delta_0 = (((((((i == 0) ? ( self->childs_bottom_delta_init ) : (  old_child->bottom_delta ))) || (child->height_delta)))));
      printf("FTL:          step childs@bottom_delta_0 %s\n", to_string(child->bottom_delta_0));
      
      int bottom_old = child->bottom;
      child->bottom = (((((child->bottom_delta_0)) ? ( ((((i == 0) ? ( self->childs_bottom_init ) : (  old_child->bottom ))) + (child->height)) ) : ( (bottom_old) ))));
      printf("FTL:          step childs@bottom %s\n", to_string(child->bottom));
      child->bottom_delta = ((((child->bottom) != (bottom_old))));
      printf("FTL:          step childs@bottom_delta %s\n", to_string(child->bottom_delta));
    old_child = child;
  }
}

 
 }
 void visit_root_0_update(Root* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  Root %s\n", "0");
 
 }
 void visit_root_1_update(Root* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  Root %s\n", "1");
  self->root->bottom_delta_0 = (root_root_bottom_delta_0(self->root->height_delta));
  printf("FTL:     root_root_bottom_delta_0 %s\n", to_string(self->root->bottom_delta_0));
  printf("FTL:         root@height_delta %s\n", to_string(self->root->height_delta));
  self->root->right_delta_0 = (root_root_right_delta_0(self->root->width_delta));
  printf("FTL:     root_root_right_delta_0 %s\n", to_string(self->root->right_delta_0));
  printf("FTL:         root@width_delta %s\n", to_string(self->root->width_delta));
  
      int bottom_old = self->root->bottom;
      self->root->bottom = (root_root_bottom(self->root->height, bottom_old, self->root->bottom_delta_0));
  printf("FTL:     root_root_bottom %s\n", to_string(self->root->bottom));
  printf("FTL:         root@height %s\n", to_string(self->root->height));
  printf("FTL:         root@bottom_old_0 %s\n", to_string(bottom_old));
  printf("FTL:         root@bottom_delta_0 %s\n", to_string(self->root->bottom_delta_0));
  
      int right_old = self->root->right;
      self->root->right = (root_root_right(self->root->width, self->root->right_delta_0, right_old));
  printf("FTL:     root_root_right %s\n", to_string(self->root->right));
  printf("FTL:         root@width %s\n", to_string(self->root->width));
  printf("FTL:         root@right_delta_0 %s\n", to_string(self->root->right_delta_0));
  printf("FTL:         root@right_old_0 %s\n", to_string(right_old));
  self->root->bottom_delta = (root_root_bottom_delta(self->root->bottom, bottom_old));
  printf("FTL:     root_root_bottom_delta %s\n", to_string(self->root->bottom_delta));
  printf("FTL:         root@bottom %s\n", to_string(self->root->bottom));
  printf("FTL:         root@bottom_old_0 %s\n", to_string(bottom_old));
  self->root->right_delta = (root_root_right_delta(right_old, self->root->right));
  printf("FTL:     root_root_right_delta %s\n", to_string(self->root->right_delta));
  printf("FTL:         root@right_old_0 %s\n", to_string(right_old));
  printf("FTL:         root@right %s\n", to_string(self->root->right));
 
 }
 void visit_root_2_update(Root* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  Root %s\n", "2");
 
 }
 void visit_leaf_0_update(Leaf* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  Leaf %s\n", "0");
  self->base.height_delta_0 = (leaf_height_delta_0(self->height_in_delta));
  printf("FTL:     leaf_height_delta_0 %s\n", to_string(self->base.height_delta));
  printf("FTL:         height_in_delta %s\n", to_string(self->height_in_delta));
  self->base.width_delta_0 = (leaf_width_delta_0(self->width_in_delta));
  printf("FTL:     leaf_width_delta_0 %s\n", to_string(self->base.width_delta));
  printf("FTL:         width_in_delta %s\n", to_string(self->width_in_delta));
  
      int height_old = self->base.height;
      self->base.height = (leaf_height(self->height_in, self->base.height_delta, height_old));
  printf("FTL:     leaf_height %s\n", to_string(self->base.height));
  printf("FTL:         height_in %s\n", to_string(self->height_in));
  printf("FTL:         height_delta_0 %s\n", to_string(self->base.height_delta));
  printf("FTL:         height_old_0 %s\n", to_string(height_old));
  
      int width_old = self->base.width;
      self->base.width = (leaf_width(width_old, self->base.width_delta, self->width_in));
  printf("FTL:     leaf_width %s\n", to_string(self->base.width));
  printf("FTL:         width_old_0 %s\n", to_string(width_old));
  printf("FTL:         width_delta_0 %s\n", to_string(self->base.width_delta));
  printf("FTL:         width_in %s\n", to_string(self->width_in));
  self->base.height_delta = (leaf_height_delta(self->base.height, height_old));
  printf("FTL:     leaf_height_delta %s\n", to_string(self->base.height_delta));
  printf("FTL:         height %s\n", to_string(self->base.height));
  printf("FTL:         height_old_0 %s\n", to_string(height_old));
  self->base.width_delta = (leaf_width_delta(width_old, self->base.width));
  printf("FTL:     leaf_width_delta %s\n", to_string(self->base.width_delta));
  printf("FTL:         width_old_0 %s\n", to_string(width_old));
  printf("FTL:         width %s\n", to_string(self->base.width));
 
 }
 void visit_leaf_1_update(Leaf* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  Leaf %s\n", "1");
 
 }
 void visit_leaf_2_update(Leaf* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  Leaf %s\n", "2");
 
 }
