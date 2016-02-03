
#include <cstdio>
#include "generated.h"
#include "visits.h"
//@type action
int hbox_childs_bottom ( int _ale_arg0) { return _ale_arg0; }
//@type action
int hbox_width ( bool _ale_arg0,  int _ale_arg1) { return (_ale_arg0) ? ( _ale_arg1 ) : ( 0 ); }
//@type action
int hbox_height ( bool _ale_arg0,  int _ale_arg1) { return (_ale_arg0) ? ( _ale_arg1 ) : ( 0 ); }
//@type action
int root_root_right ( int _ale_arg0) { return _ale_arg0; }
//@type action
int root_root_bottom ( int _ale_arg0) { return _ale_arg0; }
//@type action
int leaf_height ( int _ale_arg0) { return _ale_arg0; }
//@type action
int leaf_width ( int _ale_arg0) { return _ale_arg0; }
//@type action
int vbox_height ( bool _ale_arg0,  int _ale_arg1) { return (_ale_arg0) ? ( _ale_arg1 ) : ( 0 ); }
//@type action
int vbox_childs_right ( int _ale_arg0) { return _ale_arg0; }
//@type action
int vbox_width ( bool _ale_arg0,  int _ale_arg1) { return (_ale_arg0) ? ( _ale_arg1 ) : ( 0 ); }
 void visit_hbox_0(HBox* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  HBox %s\n", "0");
 
 }
 void visit_hbox_1(HBox* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  HBox %s\n", "1");

{
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
    old_child = child;
  }
}


  self->childsheight_init = ((0));
  self->childsheight = (self->childsheight_init);
  printf("FTL:       init childsHeight %s\n", to_string(self->childsheight_init));
  printf("FTL:     last init childsheight %s\n", to_string(self->childsheight));
    self->childswidth_init = ((0));
  self->childswidth = (self->childswidth_init);
  printf("FTL:       init childsWidth %s\n", to_string(self->childswidth_init));
  printf("FTL:     last init childswidth %s\n", to_string(self->childswidth));
  {
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
      self->childsheight = (((self->childsheight > child->height) ? ( self->childsheight ) : ( child->height )));
      printf("FTL:          step childsHeight %s\n", to_string(self->childsheight));
      self->childswidth = ((self->childswidth + child->width ));
      printf("FTL:          step childsWidth %s\n", to_string(self->childswidth));
    old_child = child;
  }
}

  self->base.height = (hbox_height(self->base.visible, self->childsheight));
  printf("FTL:     hbox_height %s\n", to_string(self->base.height));
  printf("FTL:         visible %s\n", to_string(self->base.visible));
  printf("FTL:         childsHeight %s\n", to_string(self->childsheight));
  self->base.width = (hbox_width(self->base.visible, self->childswidth));
  printf("FTL:     hbox_width %s\n", to_string(self->base.width));
  printf("FTL:         visible %s\n", to_string(self->base.visible));
  printf("FTL:         childsWidth %s\n", to_string(self->childswidth));
 
 }
 void visit_hbox_2(HBox* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  HBox %s\n", "2");

  self->childs_right_init = ((self->base.right ));
  self->childs_right_last = (self->childs_right_init);
  printf("FTL:       init childs@right %s\n", to_string(self->childs_right_init));
  printf("FTL:     last init childs_right_last %s\n", to_string(self->childs_right_last));
  {
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
      child->bottom = ((self->base.bottom ));
      self->childs_bottom_last = child->bottom;
      printf("FTL:          step childs@bottom %s\n", to_string(child->bottom));
      child->right = ((((i == 0) ? ( self->childs_right_init ) : (  old_child->right )) + child->width ));
      self->childs_right_last = child->right;
      printf("FTL:          step childs@right %s\n", to_string(child->right));
    old_child = child;
  }
}

 
 }
 void visit_root_0(Root* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  Root %s\n", "0");
 
 }
 void visit_root_1(Root* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  Root %s\n", "1");
  self->root->bottom = (root_root_bottom(self->root->height));
  printf("FTL:     root_root_bottom %s\n", to_string(self->root->bottom));
  printf("FTL:         root@height %s\n", to_string(self->root->height));
  self->root->right = (root_root_right(self->root->width));
  printf("FTL:     root_root_right %s\n", to_string(self->root->right));
  printf("FTL:         root@width %s\n", to_string(self->root->width));
 
 }
 void visit_root_2(Root* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  Root %s\n", "2");
 
 }
 void visit_leaf_0(Leaf* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  Leaf %s\n", "0");
  self->base.height = (leaf_height(self->height_in));
  printf("FTL:     leaf_height %s\n", to_string(self->base.height));
  printf("FTL:         height_in %s\n", to_string(self->height_in));
  self->base.width = (leaf_width(self->width_in));
  printf("FTL:     leaf_width %s\n", to_string(self->base.width));
  printf("FTL:         width_in %s\n", to_string(self->width_in));
 
 }
 void visit_leaf_1(Leaf* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  Leaf %s\n", "1");
 
 }
 void visit_leaf_2(Leaf* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  Leaf %s\n", "2");
 
 }
 void visit_vbox_0(VBox* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  VBox %s\n", "0");
 
 }
 void visit_vbox_1(VBox* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  VBox %s\n", "1");

{
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
    old_child = child;
  }
}


  self->childsheight_init = ((0));
  self->childsheight = (self->childsheight_init);
  printf("FTL:       init childsHeight %s\n", to_string(self->childsheight_init));
  printf("FTL:     last init childsheight %s\n", to_string(self->childsheight));
    self->childswidth_init = ((0));
  self->childswidth = (self->childswidth_init);
  printf("FTL:       init childsWidth %s\n", to_string(self->childswidth_init));
  printf("FTL:     last init childswidth %s\n", to_string(self->childswidth));
  {
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
      self->childsheight = ((self->childsheight + child->height ));
      printf("FTL:          step childsHeight %s\n", to_string(self->childsheight));
      self->childswidth = (((self->childswidth > child->width) ? ( self->childswidth ) : ( child->width )));
      printf("FTL:          step childsWidth %s\n", to_string(self->childswidth));
    old_child = child;
  }
}

  self->base.height = (vbox_height(self->base.visible, self->childsheight));
  printf("FTL:     vbox_height %s\n", to_string(self->base.height));
  printf("FTL:         visible %s\n", to_string(self->base.visible));
  printf("FTL:         childsHeight %s\n", to_string(self->childsheight));
  self->base.width = (vbox_width(self->base.visible, self->childswidth));
  printf("FTL:     vbox_width %s\n", to_string(self->base.width));
  printf("FTL:         visible %s\n", to_string(self->base.visible));
  printf("FTL:         childsWidth %s\n", to_string(self->childswidth));
 
 }
 void visit_vbox_2(VBox* self, Tree* children, unsigned int num_children) {
  printf("FTL:   visit  VBox %s\n", "2");

  self->childs_bottom_init = ((self->base.bottom ));
  self->childs_bottom_last = (self->childs_bottom_init);
  printf("FTL:       init childs@bottom %s\n", to_string(self->childs_bottom_init));
  printf("FTL:     last init childs_bottom_last %s\n", to_string(self->childs_bottom_last));
  {
  HVBox* old_child = NULL;
  for(int i = 0; i < num_children; i++) {
    HVBox* child = get_hvbox_child(children+i);
      child->bottom = ((((i == 0) ? ( self->childs_bottom_init ) : (  old_child->bottom )) + child->height ));
      self->childs_bottom_last = child->bottom;
      printf("FTL:          step childs@bottom %s\n", to_string(child->bottom));
      child->right = ((self->base.right ));
      self->childs_right_last = child->right;
      printf("FTL:          step childs@right %s\n", to_string(child->right));
    old_child = child;
  }
}

 
 }
