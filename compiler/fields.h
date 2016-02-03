#ifndef __FIELDS_H__
#define __FIELDS_H__
#include "util.h"
struct Node {
    bool b_delta_0;
    bool a_delta_0;
    bool b_delta;
    int b;
    int a;
    bool a_delta;
    /*input*/int a_old;
    /*input*/int b_old;
    Node(
      int a_old,
      int b_old
    ){
         this->b_delta_0 = false;
         this->a_delta_0 = false;
         this->b_delta = false;
         this->b = 0;
         this->a = 0;
         this->a_delta = false;
         this->a_old = a_old;
         this->b_old = b_old;
    }
};
struct Top {
    bool x_delta;
    bool x_delta_0;
    int x;
    /*input*/int x_old;
    Top(
      int x_old
    ){
         this->x_delta = false;
         this->x_delta_0 = false;
         this->x = 0;
         this->x_old = x_old;
    }
};
struct Root {
    Top base;
    /*input*/bool in_delta;
    /*input*/int in;
    int childs_a_init;
    int childs_a_last;
    bool childs_a_delta_0_init;
    bool childs_a_delta_0_last;
    bool childs_a_delta_init;
    bool childs_a_delta_last;
    bool x_delta_0_init;
    bool x_delta_0_last;
    int x_init;
    int x_last;
    Root(
      Top base,
      bool in_delta,
      int in
    ) : base(base) {
               this->in_delta = in_delta;
         this->in = in;
         this->childs_a_init = 0;
         this->childs_a_last = 0;
         this->childs_a_delta_0_init = false;
         this->childs_a_delta_0_last = false;
         this->childs_a_delta_init = false;
         this->childs_a_delta_last = false;
         this->x_delta_0_init = false;
         this->x_delta_0_last = false;
         this->x_init = 0;
         this->x_last = 0;
    }
};
struct MidNode {
    Node base;
    bool b_delta_0_init;
    bool b_delta_0_last;
    int childs_a_init;
    int childs_a_last;
    int b_init;
    int b_last;
    bool childs_a_delta_0_init;
    bool childs_a_delta_0_last;
    bool childs_a_delta_init;
    bool childs_a_delta_last;
    MidNode(
      Node base
    ) : base(base) {
               this->b_delta_0_init = false;
         this->b_delta_0_last = false;
         this->childs_a_init = 0;
         this->childs_a_last = 0;
         this->b_init = 0;
         this->b_last = 0;
         this->childs_a_delta_0_init = false;
         this->childs_a_delta_0_last = false;
         this->childs_a_delta_init = false;
         this->childs_a_delta_last = false;
    }
};
struct Leaf {
    Node base;
    /*input*/bool y_delta;
    /*input*/int y;
    Leaf(
      Node base,
      bool y_delta,
      int y
    ) : base(base) {
               this->y_delta = y_delta;
         this->y = y;
    }
};
#endif
