#ifndef __FIELDS_H__
#define __FIELDS_H__
#include "util.h"
struct Top_delta {
    bool a_delta;
    Top_delta (){
        a_delta = false;
    }
}
struct Top {
    Top_delta delta_bits;
    /*input*/int a;
    Top(
      int a
    ){
         this->a = a;
    }
};
struct HVBox_delta {
    bool width_delta;
    bool right_delta;
    bool bottom_delta;
    bool height_delta;
    bool visible_delta;
    HVBox_delta (){
        width_delta = false;
        right_delta = false;
        bottom_delta = false;
        height_delta = false;
        visible_delta = false;
    }
}
struct HVBox {
    HVBox_delta delta_bits;
    int height;
    int width;
    int bottom;
    int right;
    /*input*/int width_old_0;
    /*input*/bool visible;
    /*input*/int bottom_old_0;
    /*input*/int right_old_0;
    /*input*/int height_old_0;
    HVBox(
      int width_old_0,
      bool visible,
      int bottom_old_0,
      int right_old_0,
      int height_old_0
    ){
         this->height = 0;
         this->width = 0;
         this->bottom = 0;
         this->right = 0;
         this->width_old_0 = width_old_0;
         this->visible = visible;
         this->bottom_old_0 = bottom_old_0;
         this->right_old_0 = right_old_0;
         this->height_old_0 = height_old_0;
    }
};
struct Root {
    Top base;
    Root(
      Top base
    ) : base(base) {
          }
};
struct HBox {
    HVBox base;
    /*input*/int childsheight_old_0;
    /*input*/int childswidth_old_0;
    int childswidth;
    int childsheight;
    int childs_bottom_init;
    int childs_bottom_last;
    bool childsheight_delta_0_init;
    bool childsheight_delta_0_last;
    bool childs_bottom_delta_0_init;
    bool childs_bottom_delta_0_last;
    int childswidth_init;
    int childswidth_last;
    bool childswidth_delta_0_init;
    bool childswidth_delta_0_last;
    bool childs_right_delta_init;
    bool childs_right_delta_last;
    int childsheight_init;
    int childsheight_last;
    int childs_right_init;
    int childs_right_last;
    bool childs_right_delta_0_init;
    bool childs_right_delta_0_last;
    bool childs_bottom_delta_init;
    bool childs_bottom_delta_last;
    HBox(
      HVBox base,
      int childsheight_old_0,
      int childswidth_old_0
    ) : base(base) {
               this->childsheight_old_0 = childsheight_old_0;
         this->childswidth_old_0 = childswidth_old_0;
         this->childswidth = 0;
         this->childsheight = 0;
         this->childs_bottom_init = 0;
         this->childs_bottom_last = 0;
         this->childsheight_delta_0_init = false;
         this->childsheight_delta_0_last = false;
         this->childs_bottom_delta_0_init = false;
         this->childs_bottom_delta_0_last = false;
         this->childswidth_init = 0;
         this->childswidth_last = 0;
         this->childswidth_delta_0_init = false;
         this->childswidth_delta_0_last = false;
         this->childs_right_delta_init = false;
         this->childs_right_delta_last = false;
         this->childsheight_init = 0;
         this->childsheight_last = 0;
         this->childs_right_init = 0;
         this->childs_right_last = 0;
         this->childs_right_delta_0_init = false;
         this->childs_right_delta_0_last = false;
         this->childs_bottom_delta_init = false;
         this->childs_bottom_delta_last = false;
    }
};
struct VBox {
    HVBox base;
    /*input*/int childsheight_old_0;
    /*input*/int childswidth_old_0;
    int childswidth;
    int childsheight;
    int childs_bottom_init;
    int childs_bottom_last;
    bool childs_bottom_delta_0_init;
    bool childs_bottom_delta_0_last;
    bool childsheight_delta_0_init;
    bool childsheight_delta_0_last;
    bool childswidth_delta_0_init;
    bool childswidth_delta_0_last;
    int childswidth_init;
    int childswidth_last;
    int childsheight_init;
    int childsheight_last;
    bool childs_right_delta_init;
    bool childs_right_delta_last;
    int childs_right_init;
    int childs_right_last;
    bool childs_right_delta_0_init;
    bool childs_right_delta_0_last;
    bool childs_bottom_delta_init;
    bool childs_bottom_delta_last;
    VBox(
      HVBox base,
      int childsheight_old_0,
      int childswidth_old_0
    ) : base(base) {
               this->childsheight_old_0 = childsheight_old_0;
         this->childswidth_old_0 = childswidth_old_0;
         this->childswidth = 0;
         this->childsheight = 0;
         this->childs_bottom_init = 0;
         this->childs_bottom_last = 0;
         this->childs_bottom_delta_0_init = false;
         this->childs_bottom_delta_0_last = false;
         this->childsheight_delta_0_init = false;
         this->childsheight_delta_0_last = false;
         this->childswidth_delta_0_init = false;
         this->childswidth_delta_0_last = false;
         this->childswidth_init = 0;
         this->childswidth_last = 0;
         this->childsheight_init = 0;
         this->childsheight_last = 0;
         this->childs_right_delta_init = false;
         this->childs_right_delta_last = false;
         this->childs_right_init = 0;
         this->childs_right_last = 0;
         this->childs_right_delta_0_init = false;
         this->childs_right_delta_0_last = false;
         this->childs_bottom_delta_init = false;
         this->childs_bottom_delta_last = false;
    }
};
struct Leaf {
    HVBox base;
    /*input*/int height_in;
    /*input*/int width_in;
    Leaf(
      HVBox base,
      int height_in,
      int width_in
    ) : base(base) {
               this->height_in = height_in;
         this->width_in = width_in;
    }
};
#endif
