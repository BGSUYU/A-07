import { Tabs,Button } from 'antd';
import type { TabsProps } from 'antd';
import {CloseOutlined} from "@ant-design/icons"


interface ChildIntroduceProps {
    isIntroduce:boolean;
    setIntroduce:React.Dispatch<React.SetStateAction<boolean>>;
    isChildren:number;
}
class children {
    item:{id:number,head:Array<string>,text:Array<string>,tags:number}[];
    constructor() {
        this.item=[{
            tags:1,
            id:0,
            head:['多数据集整合'],
            text:['为了让模型学习到更丰富的眼底图像疾病分类相关知识，我们收集了公开的12个彩色眼底图像数据集和4个光学相干断层扫描（OCT）数据集，将数据集规模扩展至58,039张彩色眼底图像和45,923张OCT图像，并将其应用于视觉编码器预训练。'],
        },{
            tags:1,
            id:1,
            head:['OCT模型先验知识蒸馏'],
            text:['在彩色眼底图像模型的训练过程中，我们引入OCT模型的先验知识，并通过联合蒸馏训练方式进行知识迁移。具体而言，我们利用OCT模型中学到的共性特征，指导彩色眼底图像模型的学习过程，从而提升其特征提取能力。同时，为了适配主办方提供的数据，我们将训练得到的图像编码器在该数据集上进行微调，以确保模型的最终性能能够与目标数据集匹配。']
        },{
            tags:1,
            id:2,
            head:['左右眼联合编码'],
            text:['为了强化模型的分类能力，我们在Transformer进行分类时将类别划分为8类左眼症状、8类右眼症状以及8类总体症状，共24类。因主办方仅要求双眼联合的8种分类，这里我们在双眼联合的基础上增加单眼分类，表示可以额外区分单眼的病症。']
        },{
            tags:2,
            id:3,
            head:['OCT辅助预训练模块','标签类别细分','OCT-Fundus蒸馏增强复合模型'],
            text:['将收集到的公开数据集以及官方数据集进行整合后，我们将其分为9类，用于视觉编码器的预训练。','我们设计了一种融合OCT与彩色眼底图像信息的跨模态知识蒸馏网络架构——OCT-Fundus蒸馏增强复合模型，以有效提升彩色眼底图像中眼底病变的识别与分类精度。首先，我们利用公开的OCT医学影像数据集，结合Deepseek所提供的丰富医学领域先验知识，对视觉Transformer模型（ViT）进行充分的预训练，构建针对OCT数据的视觉编码器。该编码器能够从深度视觉特征中提取与疾病诊断高度相关的语义信息，从而具备对眼底疾病的精准理解与丰富表达能力。随后，我们采用跨模态知识蒸馏的思想，将预训练好的OCT编码器视为教师模型，并冻结其参数不再更新；同时，我们另行构建一个用于处理彩色眼底图片的ViT模型作为学生模型。训练过程中，我们将成对输入来自相同类别的OCT图像和彩色眼底图片，以实现模态间知识的有效迁移。为进一步提升模型对眼底疾病的识别能力，我们还引入大语言模型所生成的医学先验知识嵌入向量，与输入特征共同融合，使学生模型能够感知到更广泛、更精准的疾病相关语义信息，从而学习到更加全面、丰富的诊断知识。']
        },{
            tags:1,
            id:4,
            head:['标签随机可见与LLM（大语言模型）先验知识嵌入'],
            text:['在多标签分类任务中，由于部分病症标签之间存在隐性联系，我们采用了随机标签可见性策略，在训练过程中随机屏蔽部分标签，以增强模型的鲁棒性。同时，我们结合由Deepseek生成的彩色眼底图像病症特征描述，将其作为额外的嵌入，与图像特征一同输入分类网络。这种策略不仅有效增强了模型的类别判别能力，还在一定程度上缓解了数据类别不均衡问题。']
        },{
            tags:1,
            id:5,
            head:['Transformer-FFN联合分类模块'],
            text:['在联合分类阶段，针对每张眼底图像及其对应的疾病标签，我们提出了一种基于Transformer与FFN网络联合的精细化分类策略，具体实施为将来自视觉特征嵌入、语言模型先验知识嵌入以及标签状态嵌入的三类特征进行融合拼接，并统一输入Transformer网络中进行特征与标签之间复杂依赖关系的深度建模。']
        },{
            tags:3,
            id:6,
            head:['整体方案','OCT辅助预训练模块','标签-特征嵌入模块','Transformer-FFN联合分类模块'],
            text:['本模块中我们通过训练OCT图像疾病识别模型，并将其作为教师模型辅助蒸馏彩色眼底图像疾病识别模型，使彩色眼底图像模型具备不同眼底疾病图像的特征提取能力。将经过预训练的彩色眼底图像疾病识别模型作为视觉编码器，用于提取双目联合图像的特征嵌入，在后续模块配合下进行微调以适配赛题任务。','该模块中，我们通过Deepseek大语言模型生成每一类病症的对应长描述，并将其经Bert编码后与图像的源标签联合，得到图像的标签+LLM先验嵌入；同时，通过随机标签可见性策略，在训练过程中随机设置部分标签可见，并将设置的状态值作为图像的状态嵌入。','在这一模块中，我们将图像的三类嵌入拼接后输入Transformer模型中进行特征和标签的依赖关系建模，之后使用一个独立的FFN（前馈网络）对每个类别进行独立分类，得到左/右眼图像的病症类别以及双目的联合分类。']
        },{
            tags:2,
            id:7,
            head:['标签-特征嵌入模块','LLM先验嵌入','状态嵌入'],
            text:['这里我们引入由LLM提炼生成的医学先验知识嵌入，这些先验知识源自于LLM对眼底疾病的结构化语义总结，将其与类别状态编码进行有效拼接，最终与视觉特征共同输入后续的分类模块。这种做法能够使视觉分类模型从图像数据和医学语义双重视角全面理解疾病类别的特征，进一步提升分类模型的泛化能力。在医学特征提取方面，我们采用了一种不同于传统直接向大语言模型提问的两阶段问题构建方法，以实现更清晰、更易于模型编码的医学特征提炼。','在类别识别阶段，为了有效引导模型捕捉不同眼底疾病类别之间的内在医学关联与差异，我们设计并采用了一种基于部分标签可见的类别关联强化训练策略。具体而言，在模型训练过程中，我们对类别标签进行了精细化编码，明确区分为正类（表示目标疾病存在）、负类（表示目标疾病不存在）和未知状态（表示该类别不可见）三种形式。通过将部分类别的标签状态设定为可见，模型能够直接获取这些类别之间的关系信息。未知状态的引入则允许模型在缺乏明确标签的情况下，自主探索和学习类别之间的潜在关联。这种精细化的状态编码策略，通过显式地向模型传达类别之间的明确关系，增强了模型对复杂医学类别结构的理解和学习能力。相比于传统的二元或多元分类方法，该策略不仅提高了模型的分类性能，还在一定程度上缓解了类别不平衡和标签噪声等问题对模型训练的影响。']
        },{
            tags:1,
            id:8,
            head:['基于双通道眼底反射模型的图像增强与亮度平衡方法'],
            text:['由于彩色眼底图像在拍摄过程中可能存在亮度不均衡的问题，我们采用了 Shuhe Zhang等人在“A double-pass fundus reflection model for efficient retinal image enhancement”论文中提出的眼底图像增强方法。该方法通过双通道眼底反射建模，对图像亮度进行平衡，并显著增强了血管等关键细节特征，使得模型在低对比度图像上的检测能力得到提升，从而进一步提高病症识别的准确性。']
        }]
    }
}
// props: ChildIntroduceProps

const child=new children()
export default function ChildIntroduce(props:ChildIntroduceProps) {

    const onChange = (key: string) => {
        console.log(key);
    };

    const handleChildIntroduce = () => {
        if (props.isIntroduce) {
            props.setIntroduce(false);
        }
    }

    const items: TabsProps['items'] = (child.item[props.isChildren].tags===1)?
    ([
        {
          key: '1',
          label:child.item[props.isChildren].head,
          children: child.item[props.isChildren].text,
        }
    ]):
      (child.item[props.isChildren].tags===2)?([
        {
            key: '1',
            label:child.item[props.isChildren].head[1],
            children: child.item[props.isChildren].text[0],
        },{
            key: '2',
            label:child.item[props.isChildren].head[2],
            children: child.item[props.isChildren].text[1],
        }
      ]):([        
        {
            key: '1',
            label:child.item[props.isChildren].head[1],
            children: child.item[props.isChildren].text[0],
        },
        {
            key: '2',
            label:child.item[props.isChildren].head[2],
            children: child.item[props.isChildren].text[1],
        },
        {
            key: '3',
            label:child.item[props.isChildren].head[3],
            children: child.item[props.isChildren].text[2],
        }
    ]);

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: '1280px',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }}>
            <div className="child-introduce"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    height: '360px',
                    padding: '30px',
                    width: '50%',
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderRadius: '20px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                }}>
                <div style={{
                    position: 'relative',
                    top: '',
                    left: '40%',
                }}>
                    <Button icon={<CloseOutlined />} onClick={handleChildIntroduce}></Button>
                </div>
                <h1 style={{
                    fontSize: '25px',
                }}>{child.item[props.isChildren].head[0]}</h1>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
        </div>
    )
}