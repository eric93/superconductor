interface BaseFlow {
    var containingX : int;
    var containingX_delta_0 : bool;
    var containingX_delta : bool;
    input containingX_old : int;
    var containingY : int;
    var containingY_delta_0 : bool;
    var containingY_delta : bool;
    input containingY_old : int;
    var flowHeight : int;
    var flowHeight_delta_0 : bool;
    var flowHeight_delta : bool;
    input flowHeight_old : int;
    var flowWidth : int;
    var flowWidth_delta_0 : bool;
    var flowWidth_delta : bool;
    input flowWidth_old : int;
    var flowX : int;
    var flowX_delta_0 : bool;
    var flowX_delta : bool;
    input flowX_old : int;
    var flowY : int;
    var flowY_delta_0 : bool;
    var flowY_delta : bool;
    input flowY_old : int;
    var absX : int;
    var absX_delta_0 : bool;
    var absX_delta : bool;
    input absX_old : int;
    var absY : int;
    var absY_delta_0 : bool;
    var absY_delta : bool;
    input absY_old : int;
    var bottom : int;
    var bottom_delta_0 : bool;
    var bottom_delta : bool;
    input bottom_old : int;
    var right : int;
    var right_delta_0 : bool;
    var right_delta : bool;
    input right_old : int;
    var availableWidth : int;
    var availableWidth_delta_0 : bool;
    var availableWidth_delta : bool;
    input availableWidth_old : int;
    var totalWidth : int;
    var totalWidth_delta_0 : bool;
    var totalWidth_delta : bool;
    input totalWidth_old : int;
    var totalHeight : int;
    var totalHeight_delta_0 : bool;
    var totalHeight_delta : bool;
    input totalHeight_old : int;
    var display_list : DisplayList;
    var display_list_delta_0 : bool;
    var display_list_delta : bool;
    input display_list_old : DisplayList;
    input screenwidth : int;
    input screenwidth_delta : bool;
}

interface InlineBox {
    var endOfLine : bool;
    var endOfLine_delta_0 : bool;
    var endOfLine_delta : bool;
    input endOfLine_old : bool;
    var availableTextWidth : int;
    var availableTextWidth_delta_0 : bool;
    var availableTextWidth_delta : bool;
    input availableTextWidth_old : int;
    var baseline : int;
    var baseline_delta_0 : bool;
    var baseline_delta : bool;
    input baseline_old : int;
    var baselineFinal : int;
    var baselineFinal_delta_0 : bool;
    var baselineFinal_delta : bool;
    input baselineFinal_old : int;
    var lineHeight : int;
    var lineHeight_delta_0 : bool;
    var lineHeight_delta : bool;
    input lineHeight_old : int;
    var linePosY : int;
    var linePosY_delta_0 : bool;
    var linePosY_delta : bool;
    input linePosY_old : int;
    var posX : int;
    var posX_delta_0 : bool;
    var posX_delta : bool;
    input posX_old : int;
    var right : int;
    var right_delta_0 : bool;
    var right_delta : bool;
    input right_old : int;
    var posY : int;
    var posY_delta_0 : bool;
    var posY_delta : bool;
    input posY_old : int;
    input mustEndLine : bool;
    input mustEndLine_delta : bool;
    input inlineHeight : int;
    input inlineHeight_delta : bool;
    input inlineAscent : int;
    input inlineAscent_delta : bool;
    input inlineWidth : int;
    input inlineWidth_delta : bool;
}

trait blockWidth {
    children {

    }
    attributes {

    }
    actions {
        selfIntrinsWidth_delta_0 := (boxStyleWidth_delta) || (availableWidth_delta) ;

        selfIntrinsWidth := (selfIntrinsWidth_delta_0) ? (spec_or_zero(boxStyleWidth,availableWidth)) : (selfIntrinsWidth_old) ;

        selfIntrinsWidth_delta := (selfIntrinsWidth) != (selfIntrinsWidth_old) ;

        selfIntrinsHeight_delta_0 := boxStyleHeight_delta ;

        selfIntrinsHeight := (selfIntrinsHeight_delta_0) ? (spec_or_zero(boxStyleHeight,0)) : (selfIntrinsHeight_old) ;

        selfIntrinsHeight_delta := (selfIntrinsHeight) != (selfIntrinsHeight_old) ;

        pt_delta_0 := (paddingTop_delta) || (availableWidth_delta) ;

        pt := (pt_delta_0) ? (specified(paddingTop,availableWidth)) : (pt_old) ;

        pt_delta := (pt) != (pt_old) ;

        pb_delta_0 := (paddingBottom_delta) || (availableWidth_delta) ;

        pb := (pb_delta_0) ? (specified(paddingBottom,availableWidth)) : (pb_old) ;

        pb_delta := (pb) != (pb_old) ;

        pl_delta_0 := (paddingLeft_delta) || (availableWidth_delta) ;

        pl := (pl_delta_0) ? (specified(paddingLeft,availableWidth)) : (pl_old) ;

        pl_delta := (pl) != (pl_old) ;

        pr_delta_0 := (paddingRight_delta) || (availableWidth_delta) ;

        pr := (pr_delta_0) ? (specified(paddingRight,availableWidth)) : (pr_old) ;

        pr_delta := (pr) != (pr_old) ;

        bt_delta_0 := borderTop_delta ;

        bt := (bt_delta_0) ? (borderTop) : (bt_old) ;

        bt_delta := (bt) != (bt_old) ;

        bb_delta_0 := borderBottom_delta ;

        bb := (bb_delta_0) ? (borderBottom) : (bb_old) ;

        bb_delta := (bb) != (bb_old) ;

        bl_delta_0 := borderLeft_delta ;

        bl := (bl_delta_0) ? (borderLeft) : (bl_old) ;

        bl_delta := (bl) != (bl_old) ;

        br_delta_0 := borderRight_delta ;

        br := (br_delta_0) ? (borderRight) : (br_old) ;

        br_delta := (br) != (br_old) ;

        mt_delta_0 := (marginTop_delta) || ((marginTop_delta) || (availableWidth_delta)) ;

        mt := (mt_delta_0) ? ((is_auto(marginTop)) ? (0) : (spec_or_zero(marginTop,availableWidth))) : (mt_old) ;

        mt_delta := (mt) != (mt_old) ;

        mb_delta_0 := (marginBottom_delta) || ((marginBottom_delta) || (availableWidth_delta)) ;

        mb := (mb_delta_0) ? ((is_auto(marginBottom)) ? (0) : (spec_or_zero(marginBottom,availableWidth))) : (mb_old) ;

        mb_delta := (mb) != (mb_old) ;

        ml_delta_0 := (marginLeft_delta) || ((boxStyleWidth_delta) || ((marginRight_delta) || ((availableWidth_delta) || ((pr_delta) || ((pl_delta) || ((bl_delta) || ((br_delta) || ((selfIntrinsWidth_delta) || ((availableWidth_delta) || ((pr_delta) || ((pl_delta) || ((bl_delta) || ((br_delta) || ((selfIntrinsWidth_delta) || ((marginRight_delta) || ((availableWidth_delta) || ((marginLeft_delta) || (availableWidth_delta)))))))))))))))))) ;

        ml := (ml_delta_0) ? ((is_auto(marginLeft)) ? ((is_auto(boxStyleWidth)) ? (0) : ((is_auto(marginRight)) ? (((availableWidth) - ((pr) - ((pl) - ((bl) - ((br) - (selfIntrinsWidth)))))) / (2)) : ((availableWidth) - ((pr) - ((pl) - ((bl) - ((br) - ((selfIntrinsWidth) - (spec_or_zero(marginRight,availableWidth)))))))))) : (spec_or_zero(marginLeft,availableWidth))) : (ml_old) ;

        ml_delta := (ml) != (ml_old) ;

        mr_delta_0 := (marginRight_delta) || ((boxStyleWidth_delta) || ((marginLeft_delta) || ((marginRight_delta) || ((availableWidth_delta) || ((boxStyleWidth_delta) || ((marginLeft_delta) || ((availableWidth_delta) || ((pr_delta) || ((pl_delta) || ((br_delta) || ((bl_delta) || ((selfIntrinsWidth_delta) || ((availableWidth_delta) || ((pr_delta) || ((pl_delta) || ((br_delta) || ((bl_delta) || ((selfIntrinsWidth_delta) || ((marginLeft_delta) || (availableWidth_delta)))))))))))))))))))) ;

        mr := (mr_delta_0) ? (((! (is_auto(marginRight))) && ((is_auto(boxStyleWidth)) || (is_auto(marginLeft)))) ? (spec_or_zero(marginRight,availableWidth)) : ((is_auto(boxStyleWidth)) ? (0) : ((is_auto(marginLeft)) ? (((availableWidth) - ((pr) - ((pl) - ((br) - ((bl) - (selfIntrinsWidth)))))) / (2)) : ((availableWidth) - ((pr) - ((pl) - ((br) - ((bl) - ((selfIntrinsWidth) - (spec_or_zero(marginLeft,availableWidth))))))))))) : (mr_old) ;

        mr_delta := (mr) != (mr_old) ;

        computedWidth_delta_0 := (is_root_delta) || ((screenwidth_delta) || ((boxStyleWidth_delta) || ((availableWidth_delta) || ((mbpHoriz_delta) || (selfIntrinsWidth_delta))))) ;

        computedWidth := (computedWidth_delta_0) ? ((is_root) ? (screenwidth) : ((is_auto(boxStyleWidth)) ? ((availableWidth) - (mbpHoriz)) : (selfIntrinsWidth))) : (computedWidth_old) ;

        computedWidth_delta := (computedWidth) != (computedWidth_old) ;

        mbpVert_delta_0 := (mt_delta) || ((mb_delta) || ((pt_delta) || ((pb_delta) || ((bt_delta) || (bb_delta))))) ;

        mbpVert := (mbpVert_delta_0) ? ((mt) + ((mb) + ((pt) + ((pb) + ((bt) + (bb)))))) : (mbpVert_old) ;

        mbpVert_delta := (mbpVert) != (mbpVert_old) ;

        mbpHoriz_delta_0 := (ml_delta) || ((mr_delta) || ((pl_delta) || ((pr_delta) || ((bl_delta) || (br_delta))))) ;

        mbpHoriz := (mbpHoriz_delta_0) ? ((ml) + ((mr) + ((pl) + ((pr) + ((bl) + (br)))))) : (mbpHoriz_old) ;

        mbpHoriz_delta := (mbpHoriz) != (mbpHoriz_old) ;

    }

}

trait defaultBaseValues {
    children {

    }
    attributes {

    }
    actions {
        flowHeight_delta_0 := false ;

        flowHeight := (flowHeight_delta_0) ? (0) : (flowHeight_old) ;

        flowHeight_delta := (flowHeight) != (flowHeight_old) ;

        flowWidth_delta_0 := false ;

        flowWidth := (flowWidth_delta_0) ? (0) : (flowWidth_old) ;

        flowWidth_delta := (flowWidth) != (flowWidth_old) ;

        flowX_delta_0 := false ;

        flowX := (flowX_delta_0) ? (0) : (flowX_old) ;

        flowX_delta := (flowX) != (flowX_old) ;

        flowY_delta_0 := false ;

        flowY := (flowY_delta_0) ? (0) : (flowY_old) ;

        flowY_delta := (flowY) != (flowY_old) ;

        totalHeight_delta_0 := false ;

        totalHeight := (totalHeight_delta_0) ? (0) : (totalHeight_old) ;

        totalHeight_delta := (totalHeight) != (totalHeight_old) ;

        totalWidth_delta_0 := false ;

        totalWidth := (totalWidth_delta_0) ? (0) : (totalWidth_old) ;

        totalWidth_delta := (totalWidth) != (totalWidth_old) ;

    }

}

class BlockFlow(blockWidth) : BaseFlow {
    children {
        childs : [BaseFlow];

    }
    attributes {
    var childsHeight : int;
    var childsHeight_delta_0 : bool;
    var childsHeight_delta : bool;
    input childsHeight_old : int;
    var childsWidth : int;
    var childsWidth_delta_0 : bool;
    var childsWidth_delta : bool;
    input childsWidth_old : int;
    input is_root : bool;
    input is_root_delta : bool;
    input boxStyleHeight : InputLength;
    input boxStyleHeight_delta : bool;
    input boxStyleWidth : InputLength;
    input boxStyleWidth_delta : bool;
    var computedWidth : int;
    var computedWidth_delta_0 : bool;
    var computedWidth_delta : bool;
    input computedWidth_old : int;
    var mbpVert : int;
    var mbpVert_delta_0 : bool;
    var mbpVert_delta : bool;
    input mbpVert_old : int;
    var mbpHoriz : int;
    var mbpHoriz_delta_0 : bool;
    var mbpHoriz_delta : bool;
    input mbpHoriz_old : int;
    var selfIntrinsWidth : int;
    var selfIntrinsWidth_delta_0 : bool;
    var selfIntrinsWidth_delta : bool;
    input selfIntrinsWidth_old : int;
    var selfIntrinsHeight : int;
    var selfIntrinsHeight_delta_0 : bool;
    var selfIntrinsHeight_delta : bool;
    input selfIntrinsHeight_old : int;
    input marginTop : InputLength;
    input marginTop_delta : bool;
    input marginBottom : InputLength;
    input marginBottom_delta : bool;
    input marginLeft : InputLength;
    input marginLeft_delta : bool;
    input marginRight : InputLength;
    input marginRight_delta : bool;
    var mt : int;
    var mt_delta_0 : bool;
    var mt_delta : bool;
    input mt_old : int;
    var mb : int;
    var mb_delta_0 : bool;
    var mb_delta : bool;
    input mb_old : int;
    var ml : int;
    var ml_delta_0 : bool;
    var ml_delta : bool;
    input ml_old : int;
    var mr : int;
    var mr_delta_0 : bool;
    var mr_delta : bool;
    input mr_old : int;
    input paddingTop : InputLength;
    input paddingTop_delta : bool;
    input paddingBottom : InputLength;
    input paddingBottom_delta : bool;
    input paddingLeft : InputLength;
    input paddingLeft_delta : bool;
    input paddingRight : InputLength;
    input paddingRight_delta : bool;
    var pt : int;
    var pt_delta_0 : bool;
    var pt_delta : bool;
    input pt_old : int;
    var pb : int;
    var pb_delta_0 : bool;
    var pb_delta : bool;
    input pb_old : int;
    var pl : int;
    var pl_delta_0 : bool;
    var pl_delta : bool;
    input pl_old : int;
    var pr : int;
    var pr_delta_0 : bool;
    var pr_delta : bool;
    input pr_old : int;
    input borderTop : int;
    input borderTop_delta : bool;
    input borderBottom : int;
    input borderBottom_delta : bool;
    input borderLeft : int;
    input borderLeft_delta : bool;
    input borderRight : int;
    input borderRight_delta : bool;
    var bt : int;
    var bt_delta_0 : bool;
    var bt_delta : bool;
    input bt_old : int;
    var bb : int;
    var bb_delta_0 : bool;
    var bb_delta : bool;
    input bb_old : int;
    var bl : int;
    var bl_delta_0 : bool;
    var bl_delta : bool;
    input bl_old : int;
    var br : int;
    var br_delta_0 : bool;
    var br_delta : bool;
    input br_old : int;
    var makeList : DisplayList;
    var makeList_delta_0 : bool;
    var makeList_delta : bool;
    input makeList_old : DisplayList;
    }
    actions {
        loop childs {
            childsHeight_delta_0 := fold (false) .. (childs$i.totalHeight_delta) ;

            childsHeight := fold ((childsHeight_delta_0) ? (0) : (childsHeight_old)) .. ((childsHeight_delta_0) ? (($-.childsHeight) + (childs$i.totalHeight)) : ($-.childsHeight)) ;

            childsWidth_delta_0 := fold (false) .. (childs$i.totalWidth_delta) ;

            childsWidth := fold ((childsWidth_delta_0) ? (0) : (childsWidth_old)) .. ((childsWidth_delta_0) ? (max($-.childsWidth,childs$i.totalWidth)) : ($-.childsWidth)) ;

            childs.bottom_delta_0 := fold ((pt_delta) || (bt_delta)) .. ((childs$-.bottom_delta) || (childs$i.totalHeight_delta)) ;

            childs.bottom := fold ((pt) + (bt)) .. ((childs.bottom_delta_0) ? ((childs$-.bottom) + (childs$i.totalHeight)) : (childs.bottom_old)) ;

            childs.bottom_delta := fold (0) .. ((childs.bottom) != (childs.bottom_old)) ;

            childs.right_delta_0 := fold (false) .. ((childs$i.totalWidth_delta) || ((pl_delta) || (bl_delta))) ;

            childs.right := fold (0) .. ((childs.right_delta_0) ? ((childs$i.totalWidth) + ((pl) + (bl))) : (childs.right_old)) ;

            childs.right_delta := fold (0) .. ((childs.right) != (childs.right_old)) ;

            childs.containingX_delta_0 := fold (false) .. ((childs$i.right_delta) || (childs$i.totalWidth_delta)) ;

            childs.containingX := fold (0) .. ((childs.containingX_delta_0) ? ((childs$i.right) - (childs$i.totalWidth)) : (childs.containingX_old)) ;

            childs.containingX_delta := fold (0) .. ((childs.containingX) != (childs.containingX_old)) ;

            childs.containingY_delta_0 := fold (false) .. ((childs$i.bottom_delta) || (childs$i.totalHeight_delta)) ;

            childs.containingY := fold (0) .. ((childs.containingY_delta_0) ? ((childs$i.bottom) - (childs$i.totalHeight)) : (childs.containingY_old)) ;

            childs.containingY_delta := fold (0) .. ((childs.containingY) != (childs.containingY_old)) ;

            childs.absX_delta_0 := fold (false) .. ((childs$i.containingX_delta) || ((absX_delta) || (ml_delta))) ;

            childs.absX := fold (0) .. ((childs.absX_delta_0) ? ((childs$i.containingX) + ((absX) + (ml))) : (childs.absX_old)) ;

            childs.absX_delta := fold (0) .. ((childs.absX) != (childs.absX_old)) ;

            childs.absY_delta_0 := fold (false) .. ((childs$i.containingY_delta) || ((absY_delta) || (mt_delta))) ;

            childs.absY := fold (0) .. ((childs.absY_delta_0) ? ((childs$i.containingY) + ((absY) + (mt))) : (childs.absY_old)) ;

            childs.absY_delta := fold (0) .. ((childs.absY) != (childs.absY_old)) ;

            childs.availableWidth_delta_0 := fold (false) .. (computedWidth_delta) ;

            childs.availableWidth := fold (0) .. ((childs.availableWidth_delta_0) ? (computedWidth) : (childs.availableWidth_old)) ;

            childs.availableWidth_delta := fold (0) .. ((childs.availableWidth) != (childs.availableWidth_old)) ;

            display_list_delta_0 := fold (makeList_delta) .. (childs$i.display_list_delta) ;

            display_list := fold ((display_list_delta_0) ? (makeList) : (display_list_old)) .. ((display_list_delta_0) ? (merge_lists($-.display_list,childs$i.display_list)) : ($-.display_list)) ;
        }

        childsHeight_delta := (childsHeight) != (childsHeight_old) ;

        childsWidth_delta := (childsWidth) != (childsWidth_old) ;

        display_list_delta := (display_list) != (display_list_old) ;

        flowWidth_delta_0 := (is_root_delta) || ((screenwidth_delta) || ((computedWidth_delta) || ((pl_delta) || ((pr_delta) || ((bl_delta) || (br_delta)))))) ;

        flowWidth := (flowWidth_delta_0) ? ((is_root) ? (screenwidth) : ((computedWidth) + ((pl) + ((pr) + ((bl) + (br)))))) : (flowWidth_old) ;

        flowWidth_delta := (flowWidth) != (flowWidth_old) ;

        flowHeight_delta_0 := (selfIntrinsHeight_delta) || ((childsHeight_delta) || ((pb_delta) || ((pt_delta) || ((bb_delta) || ((bt_delta) || ((selfIntrinsHeight_delta) || ((pb_delta) || ((pt_delta) || ((bb_delta) || (bt_delta)))))))))) ;

        flowHeight := (flowHeight_delta_0) ? (((selfIntrinsHeight) == (0)) ? ((childsHeight) + ((pb) + ((pt) + ((bb) + (bt))))) : ((selfIntrinsHeight) + ((pb) + ((pt) + ((bb) + (bt)))))) : (flowHeight_old) ;

        flowHeight_delta := (flowHeight) != (flowHeight_old) ;

        flowX_delta_0 := (containingX_delta) || (ml_delta) ;

        flowX := (flowX_delta_0) ? ((containingX) + (ml)) : (flowX_old) ;

        flowX_delta := (flowX) != (flowX_old) ;

        flowY_delta_0 := (containingY_delta) || (mt_delta) ;

        flowY := (flowY_delta_0) ? ((containingY) + (mt)) : (flowY_old) ;

        flowY_delta := (flowY) != (flowY_old) ;

        totalWidth_delta_0 := (flowWidth_delta) || ((ml_delta) || (mr_delta)) ;

        totalWidth := (totalWidth_delta_0) ? ((flowWidth) + ((ml) + (mr))) : (totalWidth_old) ;

        totalWidth_delta := (totalWidth) != (totalWidth_old) ;

        totalHeight_delta_0 := (flowHeight_delta) || ((mt_delta) || (mb_delta)) ;

        totalHeight := (totalHeight_delta_0) ? ((flowHeight) + ((mt) + (mb))) : (totalHeight_old) ;

        totalHeight_delta := (totalHeight) != (totalHeight_old) ;

        makeList_delta_0 := (absX_delta) || ((ml_delta) || ((absY_delta) || ((mt_delta) || ((flowWidth_delta) || ((flowHeight_delta) || ((absX_delta) || ((ml_delta) || ((absY_delta) || ((mt_delta) || ((flowWidth_delta) || ((flowHeight_delta) || ((bt_delta) || ((br_delta) || ((bb_delta) || (bl_delta))))))))))))))) ;

        makeList := (makeList_delta_0) ? (add_border(add_background(new_display_list(),(absX) + (ml),(absY) + (mt),flowWidth,flowHeight),(absX) + (ml),(absY) + (mt),flowWidth,flowHeight,bt,br,bb,bl)) : (makeList_old) ;

        makeList_delta := (makeList) != (makeList_old) ;

    }

}

class InlineFlow : BaseFlow {
    children {
        childs : [InlineBox];

    }
    attributes {

    }
    actions {
        loop childs {
            childs.right_delta_0 := fold (false) .. ((childs$-.endOfLine_delta) || ((childs$i.inlinewidth_delta) || ((childs$-.right_delta) || (childs$i.inlinewidth_delta)))) ;

            childs.right := fold (0) .. ((childs.right_delta_0) ? ((childs$-.endOfLine) ? (childs$i.inlinewidth) : ((childs$-.right) + (childs$i.inlinewidth))) : (childs.right_old)) ;

            childs.right_delta := fold (0) .. ((childs.right) != (childs.right_old)) ;

            childs.posX_delta_0 := fold (false) .. ((absX_delta) || ((childs$i.right_delta) || (childs$i.inlinewidth_delta))) ;

            childs.posX := fold (0) .. ((childs.posX_delta_0) ? ((absX) + ((childs$i.right) - (childs$i.inlinewidth))) : (childs.posX_old)) ;

            childs.posX_delta := fold (0) .. ((childs.posX) != (childs.posX_old)) ;

            childs.lineHeight_delta_0 := fold (false) .. ((childs$-.endOfLine_delta) || ((childs$i.inlineHeight_delta) || ((childs$-.lineHeight_delta) || (childs$i.inlineHeight_delta)))) ;

            childs.lineHeight := fold (0) .. ((childs.lineHeight_delta_0) ? ((childs$-.endOfLine) ? (childs$i.inlineHeight) : (max(childs$-.lineHeight,childs$i.inlineHeight))) : (childs.lineHeight_old)) ;

            childs.lineHeight_delta := fold (0) .. ((childs.lineHeight) != (childs.lineHeight_old)) ;

            childs.linePosY_delta_0 := fold (false) .. ((childs$-.endOfLine_delta) || ((childs$-.linePosY_delta) || ((childs$-.lineHeight_delta) || (childs$-.linePosY_delta)))) ;

            childs.linePosY := fold (0) .. ((childs.linePosY_delta_0) ? ((childs$-.endOfLine) ? ((childs$-.linePosY) + (childs$-.lineHeight)) : (childs$-.linePosY)) : (childs.linePosY_old)) ;

            childs.linePosY_delta := fold (0) .. ((childs.linePosY) != (childs.linePosY_old)) ;

            childs.posY_delta_0 := fold (false) .. ((absY_delta) || ((childs$i.linePosY_delta) || ((childs$i.baselineFinal_delta) || (childs$i.inlineAscent_delta)))) ;

            childs.posY := fold (0) .. ((childs.posY_delta_0) ? ((absY) + ((childs$i.linePosY) + ((childs$i.baselineFinal) - (childs$i.inlineAscent)))) : (childs.posY_old)) ;

            childs.posY_delta := fold (0) .. ((childs.posY) != (childs.posY_old)) ;

            flowHeight_delta_0 := fold (false) .. (childs$i.lineHeight_delta) ;

            flowHeight := fold ((flowHeight_delta_0) ? (0) : (flowHeight_old)) .. ((flowHeight_delta_0) ? ((childs$i.lineHeight) + ($-.flowHeight)) : ($-.flowHeight)) ;

            display_list_delta_0 := fold (false) .. ((childs$i.posX_delta) || ((childs$i.posY_delta) || ((childs$i.availableTextWidth_delta) || (childs$i.lineHeight_delta)))) ;

            display_list := fold ((display_list_delta_0) ? (new_display_list()) : (display_list_old)) .. ((display_list_delta_0) ? (add_text_fragment($-.display_list,childs$i.posX,childs$i.posY,childs$i.availableTextWidth,childs$i.lineHeight)) : ($-.display_list)) ;
        }

        flowHeight_delta := (flowHeight) != (flowHeight_old) ;

        display_list_delta := (display_list) != (display_list_old) ;

        loop childs {
            childs.baselineFinal_delta_0 := fold (false) .. ((childs$-.endOfLine_delta) || ((childs$i.baseline_delta) || (childs$-.baselineFinal_delta))) ;

            childs.baselineFinal := fold (0) .. ((childs.baselineFinal_delta_0) ? ((childs$-.endOfLine) ? (childs$i.baseline) : (childs$-.baselineFinal)) : (childs.baselineFinal_old)) ;

            childs.baselineFinal_delta := fold (0) .. ((childs.baselineFinal) != (childs.baselineFinal_old)) ;
        }

        loop childs {
            childs.endOfLine_delta_0 := fold (false) .. ((childs$i.inlinewidth_delta) || ((childs$-.availableTextWidth_delta) || (childs$i.mustEndLine_delta))) ;

            childs.endOfLine := fold (true) .. ((childs.endOfLine_delta_0) ? (((childs$i.inlinewidth) > (childs$-.availableTextWidth)) || (childs$i.mustEndLine)) : (childs.endOfLine_old)) ;

            childs.endOfLine_delta := fold (0) .. ((childs.endOfLine) != (childs.endOfLine_old)) ;

            childs.availableTextWidth_delta_0 := fold (availableWidth_delta) .. ((childs$i.endOfLine_delta) || ((availableWidth_delta) || ((childs$-.availableTextWidth_delta) || (childs$i.inlinewidth_delta)))) ;

            childs.availableTextWidth := fold (availableWidth) .. ((childs.availableTextWidth_delta_0) ? ((childs$i.endOfLine) ? (availableWidth) : ((childs$-.availableTextWidth) - (childs$i.inlinewidth))) : (childs.availableTextWidth_old)) ;

            childs.availableTextWidth_delta := fold (0) .. ((childs.availableTextWidth) != (childs.availableTextWidth_old)) ;

            childs.baseline_delta_0 := fold (false) .. ((childs$-.endOfLine_delta) || ((childs$i.inlineAscent_delta) || ((childs$-.baseline_delta) || (childs$i.inlineAscent_delta)))) ;

            childs.baseline := fold (0) .. ((childs.baseline_delta_0) ? ((childs$-.endOfLine) ? (childs$i.inlineAscent) : (max(childs$-.baseline,childs$i.inlineAscent))) : (childs.baseline_old)) ;

            childs.baseline_delta := fold (0) .. ((childs.baseline) != (childs.baseline_old)) ;
        }

        flowWidth_delta_0 := availableWidth_delta ;

        flowWidth := (flowWidth_delta_0) ? (availableWidth) : (flowWidth_old) ;

        flowWidth_delta := (flowWidth) != (flowWidth_old) ;

        flowX_delta_0 := containingX_delta ;

        flowX := (flowX_delta_0) ? (containingX) : (flowX_old) ;

        flowX_delta := (flowX) != (flowX_old) ;

        flowY_delta_0 := containingY_delta ;

        flowY := (flowY_delta_0) ? (containingY) : (flowY_old) ;

        flowY_delta := (flowY) != (flowY_old) ;

        totalHeight_delta_0 := flowHeight_delta ;

        totalHeight := (totalHeight_delta_0) ? (flowHeight) : (totalHeight_old) ;

        totalHeight_delta := (totalHeight) != (totalHeight_old) ;

        totalWidth_delta_0 := flowWidth_delta ;

        totalWidth := (totalWidth_delta_0) ? (flowWidth) : (totalWidth_old) ;

        totalWidth_delta := (totalWidth) != (totalWidth_old) ;

    }

}
