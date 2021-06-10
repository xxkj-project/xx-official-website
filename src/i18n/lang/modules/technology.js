/*
 * @Author: wangshengxian
 * @Date: 2020-09-10 18:20:39
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-11 10:05:26
 * @Desc: Technology -- i18n
 */
const zhCnTechnology = {
  word1: "实力，比承诺重要", //实力，比承诺重要
  word2:
    "随着公司业务的不断发展，项目的功能越来越复杂，各个业务代码耦合也越来越多，代码量也是急剧增加，传统的MVC架构已经无法高效的管理工程代码，因此需要用一种技术来更好地管理工程，而组件化是一种能够解决代码耦合的技术。项目经过组件化的拆分，不仅可以解决代码耦合的问题，还可以增强代码的复用性，工程的易管理性等等。", //随着公司业务的不断发展，项目的功能越来越复杂，各个业务代码耦合也越来越多，代码量也是急剧增加，传统的MVC架构已经无法高效的管理工程代码，因此需要用一种技术来更好地管理工程，而组件化是一种能够解决代码耦合的技术。项目经过组件化的拆分，不仅可以解决代码耦合的问题，还可以增强代码的复用性，工程的易管理性等等。
  Android: {
    word1:
      "基于 MVP+Retrofit+OkHttp+RxJava+Route函数式和响应式编程的组件化App方案", //基于 MVP+Retrofit+OkHttp+RxJava+Route函数式和响应式编程的组件化App方案
    word2:
      "MVP是Model-View-Presenter的简写。它本质上就是MVC的改进版。传统的MVC中，M指模型层、V指视图层、C指控制层。", //MVP是Model-View-Presenter的简写。它本质上就是MVC 的改进版。传统的MVC中，M指模型层、V指视图层、C指控制层。
    word3:
      "在Android中，AcTivity或Fragment既充当控制层又充当视图层，这就导致了V和C这两层耦合在一起，当业务比较复杂时，AcTivity或Fragment文件就很庞大，导致难以维护和测试，这时就可以MVP模式。", //在Android中，AcTivity或Fragment既充当控制层又充当视图层，这就导致了V和C这两层耦合在一起，当业务比较复杂时，AcTivity或Fragment文件就很庞大，导致难以维护和测试，这时就可以MVP模式。
    word4:
      "MVP模式中，M指模型层、V指视图层、P指业务层。AcTivity或Fragment只充当视图层，不做任何的业务逻辑，将业务逻辑全部放在业务层，由演示者和模型进行交互，避免模型直接操作View.MVP的优点：将业务从AcTivity或Fragment分离，便于后期维护和测试.MVP使用特点是面向接口编程。", //MVP模式中，M指模型层、V指视图层、P指业务层。AcTivity或Fragment只充当视图层，不做任何的业务逻辑，将业务逻辑全部放在业务层，由演示者和模型进行交互，避免模型直接操作View.MVP的优点：将业务从AcTivity或Fragment分离，便于后期维护和测试.MVP使用特点是面向接口编程
    word5:
      "Retrofit是Square公司开发的一款正对Android网络请求的框架。底层基于OkHttp实现，OkHttp已经得到了google官方的认可。", //Retrofit是Square 公司开发的一款正对Android 网络请求的框架。底层基于OkHttp 实现，OkHttp 已经得到了google 官方的认可。
    word6: "OkHttp: 也是Square开源的网络请求库。", //OkHttp: 也是Square 开源的网络请求库
    word7:
      "RxJava就是为了实现异步操作而诞生的。异步操作很关键的一点是程序的简洁性，因为在调度过程比较复杂的情况下，异步代码经常会既难写也难被读懂。", //RxJava就是为了实现异步操作而诞生的。异步操作很关键的一点是程序的简洁性，因为在调度过程比较复杂的情况下，异步代码经常会既难写也难被读懂
    word8: "Android创造的AsyncTask和Handler，其实都是为了让异步代码更加简洁。", //Android 创造的 AsyncTask 和Handler ，其实都是为了让异步代码更加简洁
    word9:
      "RxJava的优势也是简洁，但它的简洁的与众不同之处在于，随着程序逻辑变得越来越复杂，它依然能够保持简洁。", //RxJava 的优势也是简洁，但它的简洁的与众不同之处在于，随着程序逻辑变得越来越复杂，它依然能够保持简洁。
    word10:
      "各自的职责：Retrofit负责请求的数据和请求的结果，使用接口的方式呈现，OkHttp负责请求的过程，RxJava负责异步，各种线程之间的切换。", //
    word11:
      "路由层的概念在服务端是指url请求的分层解析，将一个请求分发到对应的应用处理程序。移动端的路由层指的是将诸如App内页面访问、H5与App访问的访问请求和App间的访问请求，进行分发处理的逻辑层。", //路由层的概念在服务端是指url请求的分层解析，将一个请求分发到对应的应用处理程序。移动端的路由层指的是将诸如App内页面访问、H5与App访问的访问请求和App间的访问请求，进行分发处理的逻辑层。
    word12: "路由可以带来的以下好处：", //路由可以带来的以下好处：
    word13: "H5页面与App原生页面、模块与组件的交互。", //1、H5页面与App原生页面、模块与组件的交互。
    word14: "App与App之间的相互访问。", //2.App与App之间的相互访问
    word15: "App内部页面跳转、模块调度与组件加载等。", //3.App内部页面跳转、模块调度与组件加载等。
    word16:
      "推送与通知系统解除硬编码的逻辑，动态访问原生资源，更好的支持通过通知和推送完成动态页面访问和逻辑执行。", //推送与通知系统解除硬编码的逻辑，动态访问原生资源，更好的支持通过通知和推送完成动态页面访问和逻辑执行。
    word17: "Extension等动态调用主App的资源。", //5.Extension等动态调用主App的资源。
    word18:
      "App实现更复杂的架构MVVM或者是VIPER架构，提供解除业务相互依赖的能力。", //App实现更复杂的架构MVVM或者是VIPER架构，提供解除业务相互依赖的能力
    word19: "以组件化为目的的工程改造，隔离各个业务，以制作单独的组件。", //以组件化为目的的工程改造，隔离各个业务，以制作单独的组件。
  },
  Ios: {
    word1: "基于MVVM+RAC+Route函数式和响应式编程的组件化App方案", //基于 MVVM+RAC+Route函数式和响应式编程的组件化App方案
    word2:
      "MVVM是Model-View-ViewModel的简写。它本质上就是MVC的改进版。MVVM就是将其中的View的状态和行为抽象化，让我们将视图UI和业务逻辑分开。当然这些事ViewModel已经帮我们做了，它可以取出Model的数据同时帮忙处理View中由于需要展示内容而涉及的业务逻辑。微软的WPF带来了新的技术体验，如Silverlight、音频、视频、3D、动画……这导致了软件UI层更加细节化、可定制化。同时，在技术层面，WPF也带来了诸如Binding、DependencyProperty、Routed Events、Command、DataTemplate、ControlTemplate等新特性。MVVM(Model-View-ViewModel)框架的由来便是MVP(Model-View-Presenter)[模式]与WPF结合的应用方式时发展演变过来的一种新型架构[框架]。它立足于原有MVP框架并且把WPF的新特性糅合进去，以应对客户日益复杂的需求变化。", //
    word3:
      "在iOS编码中，类之间的传值，无非就是block、delegate代理、KVO、notification这几种方法。在RAC中，同样具备替代KVO、delegate代理、通知、UI target、计时器timer、数据结构等各种方法。依据响应式函数编程，RAC方法本身更加简洁明了，通过提供信号的方式(RACSignal)可以捕捉当前以及未来的属性值变化，而且无需持续观察和更新代码。可直接在block中将逻辑代码加入其中，使得代码紧凑，更加直观。", //
    word4: "ios路由支持URL Scheme的资源标示", //
  },
};

const enTechnology = {
  word1: "Strength, more important than commitment", //实力，比承诺重要
  word2:
    "With the continuous development of the company's business, the functions of the project are more and more complex, the coupling of various business codes is increasing, and the amount of code is also increasing sharply. The traditional MVC architecture has been unable to efficiently manage engineering code, so a technology is needed. To better manage the project, componentization is a technology that can solve code coupling. After component splitting, the project can not only solve the problem of code coupling, but also enhance the reusability of the code, the manageability of the project and so on.", //随着公司业务的不断发展，项目的功能越来越复杂，各个业务代码耦合也越来越多，代码量也是急剧增加，传统的MVC架构已经无法高效的管理工程代码，因此需要用一种技术来更好地管理工程，而组件化是一种能够解决代码耦合的技术项目经过组件化的拆分，不仅可以解决代码耦合的问题，还可以增强代码的复用性，工程的易管理性等等
  Android: {
    word1:
      "Componentized App Solution Based on MVP+Retrofit+OkHttp+RxJava+Route Functional and Responsive Programming", //基于 MVP+Retrofit+OkHttp+RxJava+Route函数式和响应式编程的组件化App方案
    word2:
      "MVP is short for Model-View-Presenter. It is essentially an improved version of MVC. In the conventional MVC, M refers to the model layer, the V refers to the view layer, and the C refers to the control layer.", //MVP是Model-View-Presenter的简写它本质上就是MVC 的改进版传统的MVC中，M指模型层、V指视图层、C指控制层
    word3:
      "In Android, AcTivity or Fragment acts both as a control layer and as a view layer, which leads to the coupling of V and C. When the business is complex, the AcTivity or Fragment file is very large, making it difficult to maintain and test. At this time, you can use the MVP mode.", //在Android中，AcTivity或Fragment既充当控制层又充当视图层，这就导致了V和C这两层耦合在一起，当业务比较复杂时，AcTivity或Fragment文件就很庞大，导致难以维护和测试，这时就可以MVP模式
    word4:
      "In the MVP mode, M refers to the model layer, the V refers to the view layer, and the P refers to the service layer. AcTivity or Fragment only acts as a view layer, does not do any business logic, puts the business logic all at the business layer, and interacts with the presenter and the model to avoid the advantage of the model directly operating View.MVP: separating the business from AcTivity or Fragment, Easy to maintain and test later. MVP features are interface-oriented programming.", //MVP模式中，M指模型层、V指视图层、P指业务层AcTivity或Fragment只充当视图层，不做任何的业务逻辑，将业务逻辑全部放在业务层，由演示者和模型进行交互，避免模型直接操作View.MVP的优点：将业务从AcTivity或Fragment分离，便于后期维护和测试.MVP使用特点是面向接口编程
    word5:
      "Retrofit is a framework developed by Square to address Android web requests. The underlying layer is based on OkHttp implementation, and OkHttp has been officially recognized by Google.", //Retrofit是Square 公司开发的一款正对Android 网络请求的框架底层基于OkHttp 实现，OkHttp 已经得到了google 官方的认可
    word6:
      "OkHttp: It is also the open source network request library of Square.", //OkHttp: 也是Square 开源的网络请求库
    word7:
      "RxJava was born to implement asynchronous operations. The key to asynchronous operation is the simplicity of the program, because asynchronous code is often difficult to write and difficult to read when the scheduling process is complex.", //RxJava就是为了实现异步操作而诞生的异步操作很关键的一点是程序的简洁性，因为在调度过程比较复杂的情况下，异步代码经常会既难写也难被读懂
    word8:
      "The AsyncTask and Handler created by Android are actually to make the asynchronous code more concise.", //Android 创造的 AsyncTask 和Handler ，其实都是为了让异步代码更加简洁
    word9:
      "The advantages of RxJava are also concise, but its simplicity is that as program logic becomes more complex, it remains simple.", //RxJava 的优势也是简洁，但它的简洁的与众不同之处在于，随着程序逻辑变得越来越复杂，它依然能够保持简洁
    word10:
      "Responsibilities: Retrofit is responsible for the requested data and the results of the request, presented using the interface, OkHttp is responsible for the request process, RxJava is responsible for asynchronous, switching between various threads.", //各自的职责：Retrofit 负责请求的数据和请求的结果，使用接口的方式呈现，OkHttp 负责请求的过程，RxJava 负责异步，各种线程之间的切换
    word11:
      "The concept of the routing layer on the server side refers to the hierarchical parsing of url requests, distributing a request to the corresponding application handler. The routing layer on the mobile side refers to a logical layer that performs distribution processing such as page access in the App, access requests from the H5 and App access, and access requests between the App.", //路由层的概念在服务端是指url请求的分层解析，将一个请求分发到对应的应用处理程序移动端的路由层指的是将诸如App内页面访问、H5与App访问的访问请求和App间的访问请求，进行分发处理的逻辑层
    word12: "The following benefits of routing:", //路由可以带来的以下好处：
    word13: "H5 page interaction with App native page, module and component", //1、H5页面与App原生页面、模块与组件的交互
    word14: "Mutual access between App and App.", //2.App与App之间的相互访问
    word15:
      "App internal page jump, module scheduling and component loading, etc.", //3.App内部页面跳转、模块调度与组件加载等
    word16:
      "Push and notification system unlocks hard-coded logic, dynamically accesses native resources, and better supports dynamic page access and logical execution through notifications and pushes.", //推送与通知系统解除硬编码的逻辑，动态访问原生资源，更好的支持通过通知和推送完成动态页面访问和逻辑执行
    word17:
      "Extension and other dynamic calls to the resources of the main App.", //5.Extension等动态调用主App的资源
    word18:
      "App implements a more complex architecture MVVM or VIPER architecture, providing the ability to remove business interdependencies", //App实现更复杂的架构MVVM或者是VIPER架构，提供解除业务相互依赖的能
    word19:
      "Engineering for componentization, isolating individual businesses to create individual components.", //以组件化为目的的工程改造，隔离各个业务，以制作单独的组件
  },
  Ios: {
    word1:
      "Componentized App Solution Based on MVVM+RAC+Route Functional and Reactive Programming", //基于 MVVM+RAC+Route函数式和响应式编程的组件化App方案
    word2:
      "MVVM is short for Model-View-ViewModel. It is essentially an improved version of MVC. MVVM is to abstract the state and behavior of the View, let us separate the view UI and business logic. Of course, these things have been done for us by ViewModel, which can take out the data of the Model and help with the business logic involved in the View due to the need to display content. Microsoft's WPF brings new technology experiences such as Silverlight, audio, video, 3D, animation... which leads to a more detailed and customizable UI layer. At the same time, at the technical level, WPF also brings new features such as Binding, Dependency Property, Routed Events, Command, DataTemplate, and ControlTemplate. The origin of the MVVM (Model-View-ViewModel) framework is a new architecture [framework] that evolved when MVP (Model-View-Presenter) [mode] and WPF were combined. It is based on the original MVP framework and incorporates the new features of WPF to address the increasingly complex needs of customers.", //MVVM是Model-View-ViewModel的简写它本质上就是MVC 的改进版MVVM 就是将其中的View的状态和行为抽象化，让我们将视图 UI 和业务逻辑分开当然这些事ViewModel 已经帮我们做了，它可以取出 Model 的数据同时帮忙处理 View 中由于需要展示内容而涉及的业务逻辑微软的WPF带来了新的技术体验，如Silverlight、音频、视频、3D、动画……，这导致了软件UI层更加细节化、可定制化同时，在技术层面，WPF也带来了诸如Binding、DependencyProperty、Routed Events、Command、DataTemplate、ControlTemplate等新特性MVVM（Model-View-ViewModel）框架的由来便是MVP（Model-View-Presenter）[模式]与WPF结合的应用方式时发展演变过来的一种新型架构[框架]它立足于原有MVP框架并且把WPF的新特性糅合进去，以应对客户日益复杂的需求变化
    word3:
      "In iOS encoding, the value passed between classes is nothing more than blocks, delegate proxy, KVO, notification. In RAC, there are also various methods such as replacing KVO, delegate proxy, notification, UI target, timer timer, and data structure. According to the responsive function programming, the RAC method itself is more concise, and the current and future changes in attribute values can be captured by providing a signal (RACSignal) without the need to continuously observe and update the code. Logic code can be added directly to the block, making the code compact and more intuitive.", //在iOS编码中，类之间的传值，无非就是block、delegate代理、KVO、notification这几种方法在RAC中，同样具备替代KVO、delegate代理、通知、UI target、计时器timer、数据结构等各种方法依据响应式函数编程，RAC方法本身更加简洁明了，通过提供信号的方式（RACSignal）可以捕捉当前以及未来的属性值变化，而且无需持续观察和更新代码可直接在block中将逻辑代码加入其中，使得代码紧凑，更加直观
    word4: "IOS routing supports URL Scheme resource mapping", //ios路由支持URL Scheme的资源标示
  },
};

export { zhCnTechnology, enTechnology };
