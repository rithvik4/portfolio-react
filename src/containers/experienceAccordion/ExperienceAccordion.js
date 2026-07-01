import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;

    const panelOverrides = {
      Root: {
        style: ({ $expanded }) => ({
          marginBottom: "14px",
          borderRadius: "14px",
          border: `1px solid ${$expanded ? theme.highlight : "#d5dbe5"}`,
          overflow: "hidden",
          backgroundColor: "#ffffff",
          boxShadow: $expanded
            ? "0 12px 28px rgba(25, 42, 89, 0.14)"
            : "0 4px 16px rgba(25, 42, 89, 0.08)",
          transition: "all 0.25s ease",
        }),
      },
      Header: {
        style: ({ $expanded }) => ({
          paddingTop: "18px",
          paddingBottom: "18px",
          paddingLeft: "20px",
          paddingRight: "20px",
          fontFamily: "Google Sans Medium",
          fontSize: "30px",
          lineHeight: "1.15",
          letterSpacing: "0.2px",
          color: theme.text,
          backgroundColor: $expanded ? "#f8fbff" : "#ffffff",
        }),
      },
      Content: {
        style: {
          paddingTop: "8px",
          paddingBottom: "14px",
          paddingLeft: "12px",
          paddingRight: "12px",
          backgroundColor: "#fdfefe",
        },
      },
      ToggleIcon: {
        style: {
          color: theme.text,
        },
      },
    };

    return (
      <div className="experience-accord">
        <Accordion>
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={panelOverrides}
              >
                <div className="accord-panel-content">
                  {section["experiences"].map((experience) => {
                    return (
                      <ExperienceCard
                        key={`${experience.title}-${experience.company}-${experience.duration}`}
                        experience={experience}
                        theme={theme}
                      />
                    );
                  })}
                </div>
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
