export function initSwiper(dotNetObjectReference, callbackMethod, element, index) {
    if (!element) {
        return;
    }

    element.Swiper = new Swiper(element, {
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        //autoHeight: true,//�Զ��߶�
        simulateTouch: false,//��ֹ���ģ��
        initialSlide: index,//�趨��ʼ��ʱslide������
        resistanceRatio: 0.7,
        on: {
            slideChangeTransitionStart: function () {
                dotNetObjectReference.invokeMethodAsync(callbackMethod, this.activeIndex);
            },
        }
    });
}

export function slideTo(element, value) {
    if (!element) {
        return;
    }

    element.Swiper.slideTo(value);
}

export function dispose(element) {
    if (!element) {
        return;
    }

    element.Swiper.destroy(true, true);
}
